"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps extends HTMLMotionProps<"div"> {
  /** Tilt range in degrees. Default: 10.5 (matches the original Travel Card spec). */
  intensity?: number;
  /** translateZ offset for the inner content layer to give depth. Default: 30 */
  depth?: number;
  /** Children rendered inside the depth layer. */
  children: React.ReactNode;
  /** className applied to the outer wrapper (gets the rotation). */
  className?: string;
  /** className applied to the inner depth layer (gets translateZ). */
  innerClassName?: string;
}

/**
 * Generic 3D-tilt wrapper. Apply over any card to get the same parallax/tilt
 * behaviour as the InteractiveTravelCard. Parent grid should set
 * `style={{ perspective: 1000 }}` for the effect to be visible.
 */
export const TiltCard = React.forwardRef<HTMLDivElement, TiltCardProps>(
  (
    {
      children,
      className,
      innerClassName,
      intensity = 10.5,
      depth = 30,
      style,
      ...props
    },
    ref
  ) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);
    const rotateX = useTransform(
      springY,
      [-0.5, 0.5],
      [`${intensity}deg`, `${-intensity}deg`]
    );
    const rotateY = useTransform(
      springX,
      [-0.5, 0.5],
      [`${-intensity}deg`, `${intensity}deg`]
    );

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const onMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          ...style,
        }}
        className={cn("tilt-card", className)}
        {...props}
      >
        <div
          style={{
            transform: `translateZ(${depth}px)`,
            transformStyle: "preserve-3d",
          }}
          className={cn("tilt-card-inner", innerClassName)}
        >
          {children}
        </div>
      </motion.div>
    );
  }
);
TiltCard.displayName = "TiltCard";
