"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

export function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  );
}

/**
 * Camada de background com parallax idêntica à do HeroGeometric.
 * Envolve o conteúdo children e aplica as formas geométricas animadas
 * com velocidades diferentes no scroll para criar profundidade.
 */
export function HeroParallaxBG({
  children,
  className,
  gradientFrom = "#04355a",
  gradientVia = "#032a47",
  gradientTo = "#021c30",
  shapeGradient = "from-[#04355a]/[0.45]",
}: {
  children: React.ReactNode;
  className?: string;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
  shapeGradient?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const shapesY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br",
        className,
      )}
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientVia}, ${gradientTo})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#04355a]/40 via-transparent to-[#021c30]/50 blur-3xl" />

      {/* Formas geométricas com parallax */}
      <motion.div
        style={{ y: shapesY }}
        className="absolute inset-0 overflow-hidden"
      >
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient={shapeGradient}
          className="left-[-10%] top-[15%] md:left-[-5%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient={shapeGradient.replace("[0.45]", "[0.40]")}
          className="right-[-5%] top-[70%] md:right-[0%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient={shapeGradient.replace("[0.45]", "[0.35]")}
          className="bottom-[5%] left-[5%] md:bottom-[10%] md:left-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient={shapeGradient.replace("[0.45]", "[0.42]")}
          className="right-[15%] top-[10%] md:right-[20%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient={shapeGradient.replace("[0.45]", "[0.38]")}
          className="left-[20%] top-[5%] md:left-[25%] md:top-[10%]"
        />
      </motion.div>

      {/* Conteúdo com parallax mais lento */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container relative z-10 mx-auto px-4 md:px-6"
      >
        {children}
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#021c30] via-transparent to-[#021c30]/80" />
    </div>
  );
}

export default HeroParallaxBG;