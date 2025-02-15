"use client";

import React from "react";

type IconProps = {
  children: React.ReactNode;
  isBordered?: boolean;
  onClick?: () => void;
  className?: string;
};

export default function Icon({ children, isBordered, onClick, className }: IconProps) {
  return (
    <div
      className={`${
        isBordered ? "border border-gray-200" : ""
      } p-2 rounded-full flex items-center
      justify-center cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
