"use client";
import Link from "next/link";
import BlurText from "../../components/BlurText";
import TextType from "../../components/TextType";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const WHATSAPP_EVENTOS =
  "https://wa.me/5562982103699?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%3A%20Eventos%20Corporativos.";

function ElegantShape({
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

export default function HeroEventos() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const shapesY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  return (
    <div
      ref={ref}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#04355a] via-[#032a47] to-[#021c30]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage:
            "url(https://paranaexpo.com.br/wp-content/uploads/2024/08/VITRU-CONFRA-IA-224-1024x683.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#04355a]/60 via-[#032a47]/40 to-[#021c30]/70 blur-3xl" />

      <motion.div
        style={{ y: shapesY }}
        className="absolute inset-0 overflow-hidden"
      >
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-[#04355a]/[0.45]"
          className="left-[-10%] top-[15%] md:left-[-5%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-[#04355a]/[0.40]"
          className="right-[-5%] top-[70%] md:right-[0%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-[#04355a]/[0.35]"
          className="bottom-[5%] left-[5%] md:bottom-[10%] md:left-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-[#04355a]/[0.42]"
          className="right-[15%] top-[10%] md:right-[20%] md:top-[15%]"
        />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container relative z-10 mx-auto px-4 md:px-6"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 md:mb-8">
            <BlurText
              text="Eventos que fortalecem"
              delay={120}
              animateBy="words"
              direction="top"
              className="text-4xl font-bold text-balance leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
            />
            <BlurText
              text="sua marca e engajam sua equipe"
              delay={120}
              animateBy="words"
              direction="top"
              className="text-4xl font-bold text-balance leading-tight tracking-tight text-[#7fb2d8] sm:text-5xl md:text-6xl"
            />
          </div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="mx-auto mb-4 max-w-xl px-2 text-base font-light leading-relaxed tracking-wide text-white/70 sm:px-4 sm:text-lg md:text-xl">
              Planejamos e executamos eventos corporativos com foco nos
              seus objetivos. Do briefing ao relatório final, cuidamos de
              cada detalhe para que você só precise aproveitar.
            </p>
            <TextType
              as="p"
              className="mb-8 text-lg font-bold text-[#7fb2d8] sm:text-2xl md:text-3xl"
              text={[
                "Convenções Corporativas",
                "Workshops e Treinamentos",
                "Confraternizações",
                "Feiras e Exposições",
                "Eventos Sob Medida",
              ]}
              typingSpeed={70}
              deletingSpeed={40}
              pauseDuration={1600}
              cursorClassName="text-[#7fb2d8]"
            />
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <a
              href={WHATSAPP_EVENTOS}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 animate-pulse-ring items-center justify-center rounded-full bg-white px-7 text-sm font-semibold tracking-wide text-[#04355a] transition-colors hover:bg-white/90 hover:animate-none"
            >
              SOLICITAR ORÇAMENTO
            </a>
            <Link
              href="#tipos"
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-7 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-white/10"
            >
              VER TIPOS DE EVENTOS
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#021c30] via-transparent to-[#021c30]/80" />
    </div>
  );
}