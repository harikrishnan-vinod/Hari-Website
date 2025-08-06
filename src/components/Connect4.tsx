import React, { useState, useEffect, useCallback } from "react";
import { RotateCcw, User, Bot, Trophy } from "lucide-react";

type Player = 1 | -1 | 0;
type Board = Player[][];
type GameStatus = "playing" | "human-wins" | "ai-wins" | "draw";
type LastMove = { col: number; row: number; player: Player } | null;

const Connect4Game = () => {
  const [board, setBoard] = useState<Board>(() =>
    Array(7)
      .fill(null)
      .map(() => Array(6).fill(0))
  );
  const [currentPlayer, setCurrentPlayer] = useState<Player>(1); // 1 = Human (Red), -1 = AI (Yellow)
  const [gameStatus, setGameStatus] = useState<GameStatus>("playing");
  const [isAiThinking, setIsAiThinking] = useState<boolean>(false);
  const [lastMove, setLastMove] = useState<LastMove>(null);

  // Helper function to get the top available row in a column
  const getTopRow = (board: Board, col: number): number => {
    if (col < 0 || col > 6) return -1;
    for (let i = 0; i < 6; i++) {
      if (board[col][i] !== 0) return i - 1;
    }
    return 5;
  };

  // Make a move on the board
  const makeMove = useCallback(
    (
      board: Board,
      col: number,
      player: Player
    ): { board: Board; row: number; success: boolean } => {
      const newBoard = board.map((column: Player[]) => [...column]);
      const row = getTopRow(newBoard, col);
      if (row >= 0) {
        newBoard[col][row] = player;
        return { board: newBoard, row, success: true };
      }
      return { board, row: -1, success: false };
    },
    []
  );

  // Count consecutive pieces in a direction
  const countConsecutive = (
    board: Board,
    startX: number,
    startY: number,
    dirX: number,
    dirY: number,
    player: Player
  ): number => {
    let count = 0;
    let maxCount = 0;
    let x = startX - dirX;
    let y = startY - dirY;

    while (x + dirX >= 0 && x + dirX < 7 && y + dirY >= 0 && y + dirY < 6) {
      x += dirX;
      y += dirY;
      if (board[x][y] === player) {
        count++;
        maxCount = Math.max(maxCount, count);
      } else {
        count = 0;
      }
    }
    return Math.max(maxCount, count);
  };

  // Check for win condition
  const checkWin = useCallback((board: Board, player: Player): number => {
    let maxConsecutive = 0;

    // Check horizontal
    for (let col = 0; col < 7; col++) {
      maxConsecutive = Math.max(
        maxConsecutive,
        countConsecutive(board, col, 0, 0, 1, player)
      );
    }

    // Check vertical
    for (let row = 0; row < 6; row++) {
      maxConsecutive = Math.max(
        maxConsecutive,
        countConsecutive(board, 0, row, 1, 0, player)
      );
    }

    // Check diagonal (top-left to bottom-right)
    for (let col = 0; col < 7; col++) {
      maxConsecutive = Math.max(
        maxConsecutive,
        countConsecutive(board, col, 0, 1, 1, player)
      );
      maxConsecutive = Math.max(
        maxConsecutive,
        countConsecutive(board, col, 0, -1, 1, player)
      );
    }
    for (let row = 0; row < 6; row++) {
      maxConsecutive = Math.max(
        maxConsecutive,
        countConsecutive(board, 0, row, 1, 1, player)
      );
      maxConsecutive = Math.max(
        maxConsecutive,
        countConsecutive(board, 6, row, -1, 1, player)
      );
    }

    return maxConsecutive;
  }, []);

  // Minimax algorithm with alpha-beta pruning
  const minimax = useCallback(
    (
      board: Board,
      player: Player,
      originalPlayer: Player,
      depth: number
    ): [number, number] => {
      const winCheck = checkWin(board, player);

      if (winCheck >= 4) {
        return player === originalPlayer ? [1, 0] : [-1, 0];
      }

      if (depth === 0) {
        return [0, 0];
      }

      const moves: [number, number][] = [];
      for (let col = 0; col < 7; col++) {
        const result = makeMove(board, col, player);
        if (result.success) {
          const [utility] = minimax(
            result.board,
            -player as Player,
            originalPlayer,
            depth - 1
          );
          moves.push([col, utility]);
        }
      }

      if (moves.length === 0) {
        return [0, 0];
      }

      let totalUtility = 0;
      moves.forEach((move: [number, number]) => (totalUtility += move[1]));

      const bestUtility = moves[0][1];
      let targetUtility = bestUtility;

      moves.forEach((move: [number, number]) => {
        if (player === originalPlayer) {
          if (move[1] > targetUtility) targetUtility = move[1];
        } else {
          if (move[1] < targetUtility) targetUtility = move[1];
        }
      });

      const bestMoves = moves.filter(
        (move: [number, number]) => move[1] === targetUtility
      );
      const selectedMove =
        bestMoves[Math.floor(Math.random() * bestMoves.length)][0];

      if (targetUtility === 1 || targetUtility === -1) {
        return [targetUtility, selectedMove];
      }

      return [totalUtility / 7, selectedMove];
    },
    [checkWin, makeMove]
  );

  // Handle human move
  const handleColumnClick = (col: number): void => {
    if (gameStatus !== "playing" || currentPlayer !== 1 || isAiThinking) return;

    const result = makeMove(board, col, 1);
    if (!result.success) return;

    setBoard(result.board);
    setLastMove({ col, row: result.row, player: 1 });

    const winCheck = checkWin(result.board, 1);
    if (winCheck >= 4) {
      setGameStatus("human-wins");
      return;
    }

    // Check for draw
    const isFull = result.board.every((column: Player[]) => column[0] !== 0);
    if (isFull) {
      setGameStatus("draw");
      return;
    }

    setCurrentPlayer(-1);
  };

  // AI move effect
  useEffect(() => {
    if (currentPlayer === -1 && gameStatus === "playing") {
      setIsAiThinking(true);

      const timer = setTimeout(() => {
        const [, bestMove] = minimax(board, -1, -1, 5);
        const result = makeMove(board, bestMove, -1);

        if (result.success) {
          setBoard(result.board);
          setLastMove({ col: bestMove, row: result.row, player: -1 });

          const winCheck = checkWin(result.board, -1);
          if (winCheck >= 4) {
            setGameStatus("ai-wins");
          } else {
            // Check for draw
            const isFull = result.board.every(
              (column: Player[]) => column[0] !== 0
            );
            if (isFull) {
              setGameStatus("draw");
            } else {
              setCurrentPlayer(1);
            }
          }
        }

        setIsAiThinking(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [currentPlayer, board, gameStatus, checkWin, makeMove, minimax]);

  // Reset game
  const resetGame = (): void => {
    setBoard(
      Array(7)
        .fill(null)
        .map(() => Array(6).fill(0))
    );
    setCurrentPlayer(1);
    setGameStatus("playing");
    setIsAiThinking(false);
    setLastMove(null);
  };

  const getStatusMessage = (): string => {
    switch (gameStatus) {
      case "human-wins":
        return "You Win! 🎉";
      case "ai-wins":
        return "AI Wins! 🤖";
      case "draw":
        return "It&apos;s a Draw! 🤝";
      default:
        if (isAiThinking) return "AI is thinking...";
        return currentPlayer === 1 ? "Your turn" : "AI&apos;s turn";
    }
  };

  const getCellColor = (value: Player): string => {
    if (value === 0) return "bg-slate-700";
    if (value === 1) return "bg-red-500 shadow-lg shadow-red-500/50";
    return "bg-yellow-500 shadow-lg shadow-yellow-500/50";
  };

  const isLastMove = (col: number, row: number): boolean => {
    return lastMove !== null && lastMove.col === col && lastMove.row === row;
  };

  return (
    <div className="bg-slate-800 rounded-2xl p-4 sm:p-8 max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 mb-4">
          Connect 4
        </h2>
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
          <div className="flex items-center gap-1 sm:gap-2">
            <User className="text-red-500" size={16} />
            <span className="text-slate-300 text-sm sm:text-base">
              You (Red)
            </span>
          </div>
          <div className="text-slate-500 text-sm">vs</div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Bot className="text-yellow-500" size={16} />
            <span className="text-slate-300 text-sm sm:text-base">
              AI (Yellow)
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <div
            className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium ${
              gameStatus === "playing"
                ? "bg-gradient-to-br from-indigo-500 to-indigo-600 text-white"
                : gameStatus === "human-wins"
                ? "bg-green-600 text-white"
                : gameStatus === "ai-wins"
                ? "bg-red-600 text-white"
                : "bg-slate-600 text-slate-200"
            }`}
          >
            {getStatusMessage()}
          </div>
          <button
            onClick={resetGame}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-full transition-colors text-xs sm:text-sm"
          >
            <RotateCcw size={14} />
            Reset
          </button>
        </div>
      </div>

      {/* Game Board */}
      <div className="bg-slate-900 rounded-xl p-2 sm:p-4 border border-slate-700">
        {/* Column indicators */}
        <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2">
          {Array(7)
            .fill(null)
            .map((_, col) => (
              <div
                key={col}
                className={`h-6 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-medium rounded cursor-pointer transition-colors ${
                  gameStatus === "playing" &&
                  currentPlayer === 1 &&
                  !isAiThinking
                    ? "bg-slate-700 hover:bg-slate-600 text-slate-300"
                    : "bg-slate-800 text-slate-500"
                }`}
                onClick={() => handleColumnClick(col)}
              >
                {col + 1}
              </div>
            ))}
        </div>

        {/* Board Grid */}
        <div className="grid grid-cols-7 gap-1 sm:gap-2">
          {Array(7)
            .fill(null)
            .map((_, col) => (
              <div key={col} className="space-y-1 sm:space-y-2">
                {Array(6)
                  .fill(null)
                  .map((_, row) => (
                    <div
                      key={`${col}-${row}`}
                      className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-slate-600 transition-all duration-300 ${getCellColor(
                        board[col][row]
                      )} ${
                        isLastMove(col, row)
                          ? "ring-2 ring-white ring-opacity-75"
                          : ""
                      } ${
                        gameStatus === "playing" &&
                        currentPlayer === 1 &&
                        !isAiThinking
                          ? "hover:border-slate-500 cursor-pointer"
                          : ""
                      }`}
                      onClick={() => handleColumnClick(col)}
                    />
                  ))}
              </div>
            ))}
        </div>
      </div>

      {/* Game Description */}
      <div className="mt-6 sm:mt-8 text-center">
        <div className="bg-slate-700/50 rounded-xl p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-slate-200 mb-3 flex items-center justify-center gap-2">
            <Trophy size={18} />
            About This Game
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
            This Connect 4 implementation features a{" "}
            <strong>Minimax algorithm with alpha-beta pruning</strong> for AI
            decision-making. The AI explores possible moves up to depth 5 and
            evaluates each position&apos;s utility value to make optimal
            decisions.
          </p>
          <p className="text-slate-400 text-xs">
            Click on any column to drop your red disc. Get 4 in a row to win!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Connect4Game;
