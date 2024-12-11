"use client";
import React, { useState } from "react";
import Link from "next/link";

export function Navbar() {

  const [text, setText] = useState("DUB35");

  const handleMouseOver = () => {
    const originalText = "DUB35";
    let deciphered = "";

    const interval = setInterval(() => {
      deciphered = originalText
        .split("")
        .map((char) =>
          Math.random() > 0.5
            ? String.fromCharCode(33 + Math.floor(Math.random() * 94))
            : char
        )
        .join("");

      setText(deciphered);
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
      setText(originalText);
    }, 300);
  };
  return (
    <div className="relative flex justify-between w-full">
      <Link href="/" className="text-3xl font-bold" onMouseOver={handleMouseOver}>
        {text}
      </Link>
      <div className="flex space-x-4">
        <Link href="/projects" className="text-lg">
          projects
        </Link>
        </div>
    </div>
  );
}

export default Navbar;
