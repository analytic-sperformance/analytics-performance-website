import React from "react";

export function Button({ children, onClick, type = "button", variant = "default", className = "" }) {
  const base = "px-4 py-2 rounded-lg font-medium transition-colors";
  const variants: Record<string, string> = {
    default: "bg-blue-600 hover:bg-blue-700 text-white",
    outline: "border border-white text-white hover:bg-white hover:text-black",
    ghost: "text-white hover:text-blue-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </button>
  );
}
