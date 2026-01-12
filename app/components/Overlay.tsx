"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // ✅ Opacity transforms (Section 1 faster, Section 3 longer hold)
  const opacity1 = useTransform(scrollYProgress, [0, 0.08, 0.14], [1, 1, 0]);

  const opacity2 = useTransform(
    scrollYProgress,
    [0.14, 0.22, 0.4],
    [0, 1, 0]
  );

  const opacity3 = useTransform(
    scrollYProgress,
    [0.4, 0.52, 0.88],
    [0, 1, 0]
  );

  // ✅ Y transforms (less movement = more readable)
  const y1 = useTransform(scrollYProgress, [0, 0.14], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0.14, 0.4], [30, -30]);
  const y3 = useTransform(scrollYProgress, [0.4, 0.82], [20, -20]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 px-4">
      <div className="relative w-full h-full">
        {/* SECTION 1 */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex items-center justify-center text-center"
        >
          <div className="max-w-4xl">
            <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-white/70 drop-shadow-sm">
              Creative Developer
            </p>

            <h1 className="mt-3 text-5xl md:text-8xl font-semibold tracking-tight text-white drop-shadow-md">
              Shriful Islam
            </h1>

            <p className="mt-4 text-base md:text-xl font-light text-white/80 leading-relaxed drop-shadow-sm">
              B.Sc. in CSE • Passionate about{" "}
              <span className="text-white">AI, ML & Automation</span> • Building
              skills for the future 🔥
            </p>

            <p className="mt-2 text-sm md:text-base text-white/70 drop-shadow-sm">
              Building solutions that matter ⚡
            </p>
          </div>
        </motion.div>

        {/* SECTION 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex items-center justify-start"
        >
          <div className="max-w-3xl md:ml-[14%]">
            <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-white/70 drop-shadow-sm">
              What I do
            </p>
            <h2 className="mt-3 text-4xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05] drop-shadow-md">
              I build AI-powered automation <br className="hidden md:block" />
              & cinematic web experiences.
            </h2>
          </div>
        </motion.div>

        {/* SECTION 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex items-center justify-end"
        >
          <div className="max-w-3xl text-right md:mr-[14%]">
            <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-white/70 drop-shadow-sm">
              Focus areas
            </p>
            <h2 className="mt-3 text-4xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05] drop-shadow-md">
              Computer Vision <br className="hidden md:block" />
              Machine Learning <br className="hidden md:block" />
              High-performance UI
            </h2>

            <p className="mt-4 text-sm md:text-base text-white/70 drop-shadow-sm">
              Design mindset, engineering execution.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
