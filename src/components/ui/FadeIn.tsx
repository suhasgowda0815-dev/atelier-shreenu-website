"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type FadeInProps = Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport"> & {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function FadeIn({ children, delay = 0, y = 24, className, ...rest }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
