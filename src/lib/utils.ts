import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function delay(delayInMs: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delayInMs);
  });
}
