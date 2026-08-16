"use client";

import * as React from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = React.useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > window.innerHeight * 0.8));

  return (
    <div className="fixed bottom-24 right-4 z-40 md:bottom-28 md:right-8">
      <AnimatePresence>
        {visible && (
          <motion.button
            type="button"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white text-ink shadow-md transition-colors hover:text-deepblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deepblue md:h-11 md:w-11"
          >
            <ArrowUp className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
