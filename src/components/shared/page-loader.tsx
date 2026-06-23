"use client";

import { motion } from "framer-motion";

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="relative h-16 w-16"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border-4 border-muted" />
          <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm font-medium text-muted-foreground"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
}
