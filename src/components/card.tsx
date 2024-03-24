"use client";
import { cn } from "@/lib/utils";
import { useMotionValue } from "framer-motion";
import { HTMLAttributes } from "react";
import { DynamicPattern } from "./pattern/dynamic-pattern";

type CardProps = HTMLAttributes<HTMLDivElement> & {};

export const Card2 = ({ className, ...props }: CardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const onMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div
      className="card group h-full hover:bg-accent"
      onMouseMove={onMouseMove}
    >
      <div
        className={cn(
          "relative z-0 flex flex-1 flex-col items-start gap-4",
          className,
        )}
        {...props}
      />

      <DynamicPattern
        width={76}
        height={56}
        x="50%"
        y="-6"
        squares={[[0, 1]]}
        mouseX={mouseX}
        mouseY={mouseY}
      />
    </div>
  );
};
