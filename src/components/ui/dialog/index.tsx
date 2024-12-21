import "./style.css";
import { cn } from "@/lib/utils";
import {
  Dialog as DialogRoot,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
  DialogClose,
} from "./radix";
import { X } from "lucide-react";

type DialogProps = {
  overflow?: "overlay" | "children" | "content";
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  trigger?: React.ReactNode;
  triggerClassName?: string;
  headerClassName?: string;
  title?: React.ReactNode;
  titleClassName?: string;
  titleIcon?: React.ReactNode;
  description?: React.ReactNode;
  descriptionClassName?: string;
  contentClassName?: string;
  closeClassName?: string;
};

export function Dialog({
  overflow = "overlay",
  className,
  open,
  onOpenChange,
  children,
  trigger,
  triggerClassName,
  headerClassName,
  title,
  titleClassName,
  titleIcon,
  description,
  descriptionClassName,
  contentClassName,
  closeClassName,
}: DialogProps) {
  return (
    <DialogRoot open={open} onOpenChange={onOpenChange}>
      {open !== undefined && onOpenChange !== undefined ? (
        <div className={cn(triggerClassName)}>{trigger}</div>
      ) : (
        <DialogTrigger className={cn(triggerClassName)} asChild>
          {trigger}
        </DialogTrigger>
      )}
      <DialogContent
        overflow={overflow}
        className={cn(
          "scrollbar-hide p-0",
          overflow === "content" &&
            "h-full max-h-[calc(100dvh-1.5rem)] w-[calc(100dvw-1.5rem)] overflow-y-auto",
          overflow === "overlay" && "relative",
          contentClassName,
        )}
      >
        <DialogHeader
          className={cn("m-0 rounded-t-lg border-none p-4", headerClassName)}
        >
          <DialogTitle
            className={cn("flex items-center gap-2", titleClassName)}
          >
            {titleIcon}
            <h3 className="mt-0.5">{title}</h3>
          </DialogTitle>
          <DialogDescription className={descriptionClassName}>
            {description}
          </DialogDescription>
        </DialogHeader>
        <div
          className={cn(
            "mt-0 p-4 pt-0",
            overflow === "children" && "max-h-[70dvh] overflow-y-auto",
            overflow === "content" && "max-h-[calc(100dvh-3rem)]",
            className,
          )}
        >
          {children}
        </div>
        <DialogClose
          className={cn(
            "absolute right-4 top-4 size-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:text-muted-foreground",
            closeClassName,
          )}
        >
          <X className="h-full w-full" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </DialogRoot>
  );
}

export default Dialog;
