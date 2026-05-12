import { SFC } from "@/types";
import { cn } from "@/utils";
import { memo, ReactNode } from "react";
import * as motion from "motion/react-client";

interface PageHeaderPanelProps {
  title: string;
  subtitle: string;
  backdrop?: string
  qoute?: string;
  chapter?:string
  actions?: ReactNode;
}

export const PageHeaderPanel: SFC<PageHeaderPanelProps> = memo(
  ({ ClassName, title, subtitle, chapter, backdrop = "Dreamer", qoute, actions }) => {
    return (
      <section
        id="hero"
        className={cn(
          "relative flex justify-center items-center min-h-screen md:px-0 px-4 overflow-hidden",
          ClassName
        )}
      >
        {/* Background Decorative Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none opacity-[0.03] select-none z-0">
          <span className="text-[12rem] md:text-[20rem] text-center font-black uppercase tracking-tighter text-white">
            {backdrop}
          </span>
        </div>

        <div className="w-full md:w-10/12 flex flex-col items-center relative z-10">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-primary font-mono tracking-[0.3em] uppercase text-sm">
              {chapter}
            </span>
          </motion.div>

          {/* Name / Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center text-center"
          >
            <h1 className="font-bold uppercase text-[2.5rem] md:text-[5rem] leading-tight mb-4 overflow-visible">
              {title}
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-10"
          >
            <span className="text-lg md:text-xl text-[#9C9C9C] font-mono tracking-wide">
              {subtitle}
            </span>
          </motion.div>

          {/* Quote / Description */}
          {qoute && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="max-w-2xl text-center mb-12"
            >
              <p className="text-lg md:text-xl text-[#9C9C9C]/80 leading-relaxed">
                {qoute}
              </p>
            </motion.div>
          )}

          {/* Action Buttons */}
          {actions && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex flex-row items-center gap-4"
            >
              {actions}
            </motion.div>
          )}

          {/* Scroll indicator */}
        <div className="mt-[9rem]">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#9C9C9C]/40">
                Scroll
              </span>
              <div className="w-[1px] h-6 bg-gradient-to-b from-[#e9c6a9]/40 to-transparent" />
            </motion.div>
          </motion.div> 
        </div>
        </div>
      </section>
    );
  }
);
