"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import TextType from "./TextType";
import BlurText from "./BlurText";

const WHATSAPP =
  "https://wa.me/5562982103699?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.";

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

export function HeroGeometric({
  badge = "Departamento Pessoal · SST · Goiânia-GO",
  title1 = "Seu departamento pessoal",
  title2 = "terceirizado, sem dor de cabeça",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
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

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Camadas em velocidades diferentes = profundidade.
  const shapesY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div
      ref={ref}
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#04355a] via-[#032a47] to-[#021c30]"
    >
      {/* Imagem de fundo (depto pessoal) bem sutil */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url(/hero-bg.jpg)" }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-[#04355a]/40 via-transparent to-[#021c30]/50 blur-3xl" />

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
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-[#04355a]/[0.38]"
          className="left-[20%] top-[5%] md:left-[25%] md:top-[10%]"
        />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container relative z-10 mx-auto px-4 md:px-6"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 md:mb-8">
            <BlurText
              text={title1}
              delay={120}
              animateBy="words"
              direction="top"
              className="text-4xl font-bold text-balance leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
            />
            <BlurText
              text={title2}
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
              Terceirize a folha de pagamento, os laudos de SST, o eSocial e a
              burocracia trabalhista. Prazos cumpridos e suporte humano de
              verdade — você foca no negócio, a gente cuida do resto.
            </p>
            <TextType
              as="p"
              className="mb-8 text-lg font-bold text-[#7fb2d8] sm:text-2xl md:text-3xl"
              text={[
                "Folha de Pagamento",
                "Consultoria em SST",
                "eSocial em dia",
                "Certificado Digital",
                "Abertura de Empresa",
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
              href="#diagnostico"
              className="flex h-12 animate-pulse-ring items-center justify-center rounded-full bg-white px-7 text-sm font-semibold tracking-wide text-[#04355a] transition-colors hover:bg-white/90 hover:animate-none"
            >
              QUERO UM DIAGNÓSTICO GRÁTIS
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-7 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-white/10"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.515 5.26l-.999 3.648 3.973-1.039zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              FALAR NO WHATSAPP
            </a>
          </motion.div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#021c30] via-transparent to-[#021c30]/80" />
    </div>
  );
}

export default HeroGeometric;
