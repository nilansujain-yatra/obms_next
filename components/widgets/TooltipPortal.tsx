'use client';

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function TooltipPortal({ children, position }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return createPortal(
    <div
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        transform: "translate(-50%, -100%)",
        zIndex: 9999,
      }}
      className="p-3 max-w-xs bg-black text-white text-sm rounded-lg shadow-lg border border-gray-700 whitespace-normal break-words animate-fade-in"
    >
      {children}
    </div>,
    document.body
  );
}
