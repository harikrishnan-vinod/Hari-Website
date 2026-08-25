import Connect4Modal from "@/components/Connect4Modal";
import { Suspense } from "react";

export const metadata = {
  title: "Connect 4",
};

export default function Connect4Page() {
  return (
    <Suspense fallback={null}>
      <Connect4Modal />
    </Suspense>
  );
}
