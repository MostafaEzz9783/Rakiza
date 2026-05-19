"use client";

import { motion } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  className = ""
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CountMetric({ value, suffix = "" }: { value: number; suffix?: string }) {
  return <span>{value.toLocaleString("en-US")}{suffix}</span>;
}
