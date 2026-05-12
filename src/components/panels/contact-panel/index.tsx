import { SFC } from "@/types";
import { cn } from "@/utils";
import MailIcon from "@mui/icons-material/Mail";
import { memo } from "react";
import * as motion from "motion/react-client";

const ContactPanel: SFC = memo(({ ClassName }) => {
  return (
    <section
      id="contact"
      className={cn(
        "relative flex justify-center items-center md:py-32 py-12 md:px-0 px-4 overflow-hidden",
        ClassName
      )}
    >
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none opacity-[0.03] select-none z-0">
        <span className="text-[12rem] md:text-[20rem] font-black uppercase tracking-tighter text-white">
          Connect
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
             Let's Talk
          </span>
          <h1 className="font-bold overflow-visible uppercase text-[2.5rem] md:text-[4rem] leading-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-[#9C9C9C] max-w-2xl leading-relaxed">
            Have a project in mind or just want to say hello? I'd love to hear
            from you. Let's build something remarkable together.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-2xl"
        >
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 md:p-10 flex flex-col items-center gap-8">
            {/* Greeting */}
            <div className="flex flex-col items-center text-center gap-3">
              <span className="text-4xl select-none">👋</span>
              <span className="text-xl md:text-2xl font-semibold text-white/90">
                Hey there! Hope you're having an awesome day!
              </span>
              <span className="text-[#9C9C9C]/70 text-sm leading-relaxed">
                Want to get in touch? You can reach out using the details below.
              </span>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

            {/* Email */}
            <a
              href="mailto:ryanmark.dinglasa@gmail.com"
              className="group flex items-center gap-4 px-6 py-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#e9c6a9]/30 hover:bg-white/[0.04] transition-all duration-300 w-full md:w-auto"
            >
              <div className="w-10 h-10 rounded-lg bg-[#e9c6a9]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e9c6a9]/20 transition-colors duration-300">
                <MailIcon
                  sx={{ fontSize: "1.2rem", color: "#e9c6a9" }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono uppercase tracking-widest text-[#9C9C9C]/40 mb-1">
                  Email
                </span>
                <span className="text-sm text-white/80 group-hover:text-[#e9c6a9] transition-colors duration-200">
                  ryanmark.dinglasa@gmail.com
                </span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default ContactPanel;
