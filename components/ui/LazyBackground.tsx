"use client";
import dynamic from "next/dynamic";

const BackgroundInner = dynamic(
  () => import("./Background").then((m) => m.Background),
  { ssr: false }
);

export function LazyBackground() {
  return <BackgroundInner />;
}
