"use client";

import React, { useState } from "react";
import { Input, type InputProps } from "../input";
import { Eye, EyeOff } from "lucide-react";

type Props = Omit<InputProps, "type" | "endAdornment">;

export default function InputPassword(props: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      type={showPassword ? "text" : "password"} // Kontrol tipe input
      endAdornment={
        <button
          tabIndex={-1}
          type="button"
          onClick={() => setShowPassword((prev) => !prev)} // Toggle visibilitas password
        >
          {showPassword ? (
            <Eye className="size-4 text-neutral-500" />
          ) : (
            <EyeOff className="size-4 text-neutral-500" />
          )}
        </button>
      }
      {...props}
    />
  );
}

export { InputPassword };
