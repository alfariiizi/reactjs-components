"use client";

import { Input } from "@alfarizi/react-input";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      Alfarizi&apos; Components
      <div>
        <Input className="border border-primary text-black" />
      </div>
    </div>
  );
}
