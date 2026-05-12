import { DevelopmentProcedure, SFC } from "@/types";
import { cn } from "@/utils";
import { Fragment, memo, useState } from "react";
import { DevelopmentProcedureData } from "@/constants";

import MdiIcon from "@mdi/react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

export const ProcedurePanel: SFC = memo(({ ClassName }) => {
  const [active, setActive] = useState<DevelopmentProcedure | null>(null);

  return (
    <section
      id="procedure"
      className={cn(
        "relative flex justify-center items-center md:py-32 py-12 md:px-0 px-4 overflow-hidden",
        ClassName
      )}
    >
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none opacity-[0.03] select-none z-0">
        <span className="text-[12rem] md:text-[20rem] font-black uppercase tracking-tighter text-white">
          Process
        </span>
      </div>

      <div className="w-full md:w-10/12 flex flex-col items-center relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-primary font-mono tracking-[0.3em] uppercase text-sm mb-4">
            04 // How I Work
          </span>
          <h1 className="font-bold uppercase overflow-visible text-[2.5rem] md:text-[4rem] leading-tight mb-6">
            Process
          </h1>
          <p className="text-lg md:text-xl text-[#9C9C9C] max-w-2xl leading-relaxed">
            Every project follows a battle-tested 5-phase process — from
            understanding your goals to delivering a product you can confidently
            own and scale.
          </p>
        </motion.div>

        {/* Procedure Cards */}
        <div className="w-full flex md:flex-row flex-col items-stretch justify-center gap-0 py-10 overflow-visible">
          {DevelopmentProcedureData.map((data, index) => {
            const isActive = active?.title === data.title;
            const stepNum = String(index + 1).padStart(2, "0");

            return (
              <Fragment key={"procedure-step-" + index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="flex items-center md:flex-row flex-col md:w-fit w-full"
                >
                  <button
                    onClick={() => {
                      if (isActive) setActive(null);
                      else setActive(data);
                    }}
                    className={cn(
                      "group relative w-full md:w-[13rem] md:h-[16rem] h-fit rounded-2xl p-5 flex flex-col justify-between",
                      "border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm",
                      "transition-all duration-300 ease-out cursor-pointer overflow-visible",
                      "hover:border-[#e9c6a9]/40 hover:bg-white/[0.04] hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(233,198,169,0.08)]",
                      isActive &&
                        "border-[#e9c6a9]/50 bg-white/[0.04] scale-[1.03] shadow-[0_8px_30px_rgba(233,198,169,0.1)]"
                    )}
                  >
                    {/* Top accent bar */}
                    <div
                      className={cn(
                        "absolute top-0 left-4 right-4 h-[2px] rounded-full transition-all duration-300",
                        "bg-gradient-to-r from-transparent via-[#e9c6a9] to-transparent",
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                      )}
                    />

                    {/* Step number + Icon row */}
                    <div className="flex items-start justify-between w-full mb-3">
                      <span
                        className={cn(
                          "font-mono text-2xl font-bold transition-colors duration-300",
                          isActive
                            ? "text-[#e9c6a9]"
                            : "text-white/20 group-hover:text-[#e9c6a9]/60"
                        )}
                      >
                        {stepNum}
                      </span>
                      <MdiIcon
                        path={data.icon}
                        className={cn(
                          "w-8 h-8 transition-colors duration-300",
                          isActive
                            ? "text-[#e9c6a9]"
                            : "text-[#9C9C9C]/60 group-hover:text-[#e9c6a9]/80"
                        )}
                      />
                    </div>

                    {/* Title */}
                    <div className="flex flex-col items-start gap-2 mt-auto">
                      <span
                        className={cn(
                          "text-lg font-bold uppercase tracking-wide text-left transition-colors duration-300",
                          isActive
                            ? "text-white"
                            : "text-[#9C9C9C] group-hover:text-white"
                        )}
                      >
                        {data.title}
                      </span>

                      {/* Objective preview */}
                      <span className="text-xs text-[#9C9C9C]/70 leading-relaxed text-left line-clamp-2">
                        {data.objective}
                      </span>
                    </div>

                    {/* Phase label */}
                    <div className="mt-3 pt-3 border-t border-white/[0.06]">
                      <span
                        className={cn(
                          "text-[11px] font-mono uppercase tracking-widest transition-colors duration-300",
                          isActive
                            ? "text-[#e9c6a9]"
                            : "text-[#9C9C9C]/40 group-hover:text-[#9C9C9C]/60"
                        )}
                      >
                        {data.phase}
                      </span>
                    </div>
                  </button>

                  {/* Connector line between cards (desktop only) */}
                  {index < DevelopmentProcedureData.length - 1 && (
                    <div className="hidden md:flex items-center justify-center w-8 flex-shrink-0">
                      <div className="w-full h-[1px] border-t border-dashed border-[#e9c6a9]/20" />
                    </div>
                  )}

                  {/* Connector line between cards (mobile only) */}
                  {index < DevelopmentProcedureData.length - 1 && (
                    <div className="flex md:hidden items-center justify-center h-8 flex-shrink-0">
                      <div className="h-full w-[1px] border-l border-dashed border-[#e9c6a9]/20" />
                    </div>
                  )}
                </motion.div>
              </Fragment>
            );
          })}
        </div>

        {/* Detail Expansion Area */}
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.title}
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full overflow-hidden"
            >
              <div className="w-full rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 mt-2">
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/[0.08]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#e9c6a9]/10 flex items-center justify-center flex-shrink-0">
                      <MdiIcon
                        path={active.icon}
                        className="w-7 h-7 text-[#e9c6a9]"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl md:text-2xl font-bold text-white">
                        {active.alias}
                      </span>
                      <span className="text-sm font-mono text-[#9C9C9C]/60 uppercase tracking-widest mt-1">
                        {active.phase}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setActive(null)}
                    className="w-9 h-9 rounded-full border border-white/[0.1] flex items-center justify-center text-[#9C9C9C] hover:text-white hover:border-white/30 transition-colors duration-200 flex-shrink-0 cursor-pointer"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    >
                      <line x1="1" y1="1" x2="13" y2="13" />
                      <line x1="13" y1="1" x2="1" y2="13" />
                    </svg>
                  </button>
                </div>

                {/* Objective */}
                <div className="flex items-start gap-3 py-5">
                  <span className="text-lg select-none">🎯</span>
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                    <span className="text-sm font-semibold text-[#e9c6a9] uppercase tracking-wide">
                      Objective:
                    </span>
                    <span className="text-[15px] text-[#9C9C9C] leading-relaxed">
                      {active.objective}
                    </span>
                  </div>
                </div>

                {/* Activities — Timeline Layout */}
                <div className="flex flex-col relative mt-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#9C9C9C]/40 mb-4">
                    Activities
                  </span>

                  <div className="flex flex-col gap-0 relative">
                    {/* Vertical timeline line */}
                    <div className="absolute left-[7px] top-3 bottom-3 w-[1px] bg-gradient-to-b from-[#e9c6a9]/30 via-[#e9c6a9]/10 to-transparent" />

                    {active.activity.map((activity, index) => (
                      <motion.div
                        key={active.title + "-activity-" + index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.08,
                        }}
                        className="flex gap-4 py-3 group/activity"
                      >
                        {/* Timeline dot */}
                        <div className="flex-shrink-0 mt-[6px] relative z-10">
                          <div className="w-[15px] h-[15px] rounded-full border-2 border-[#e9c6a9]/30 bg-[#161616] flex items-center justify-center group-hover/activity:border-[#e9c6a9]/60 transition-colors duration-200">
                            <div className="w-[5px] h-[5px] rounded-full bg-[#e9c6a9]/50 group-hover/activity:bg-[#e9c6a9] transition-colors duration-200" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-1 pb-2">
                          <span className="text-sm font-semibold text-white/90 group-hover/activity:text-white transition-colors duration-200">
                            {activity.title}
                          </span>
                          <span className="text-sm text-[#9C9C9C]/70 leading-relaxed group-hover/activity:text-[#9C9C9C] transition-colors duration-200">
                            {activity.description}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
});
export default ProcedurePanel;
