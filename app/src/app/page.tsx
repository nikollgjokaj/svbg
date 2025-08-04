"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const { scrollYProgress } = useScroll();
  const { scrollY } = useScroll();
  
  // Scroll progress spring animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  // Refs for scroll animations
  const heroRef = useRef<HTMLElement>(null);
  const uspRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };


  // Email Templates for different CTAs
  const createEmailLink = (type: 'erstgespraech' | 'angebot' | 'kontakt' | 'mehr-erfahren') => {
    const subject = {
      'erstgespraech': 'Anfrage für Erstgespräch - Fuhrparkmanagement',
      'angebot': 'Angebot anfordern - KFZ-Vermietung & Fuhrparkmanagement',
      'kontakt': 'Kontaktaufnahme - SVBG GmbH',
      'mehr-erfahren': 'Informationsanfrage - Fuhrparkmanagement Services'
    }[type];

    const body = {
      'erstgespraech': `Sehr geehrte Damen und Herren,

ich interessiere mich für ein unverbindliches Erstgespräch zu Ihren Fuhrparkmanagement-Services.

Meine Kontaktdaten:
Name: [Ihr Name]
Firma: [Ihre Firma]
Adresse: [Ihre Adresse]
Telefon: [Ihre Telefonnummer]

Mein Anliegen:
[Beschreiben Sie hier kurz Ihre Anforderungen oder Fragen zum Fuhrparkmanagement]

Ich freue mich auf Ihre Kontaktaufnahme.

Mit freundlichen Grüßen
[Ihr Name]`,
      
      'angebot': `Sehr geehrte Damen und Herren,

hiermit möchte ich ein unverbindliches Angebot für Ihre Services anfordern.

Meine Kontaktdaten:
Name: [Ihr Name]
Firma: [Ihre Firma]
Adresse: [Ihre Adresse]
Telefon: [Ihre Telefonnummer]

Gewünschte Services:
□ KFZ-Vermietung
□ Fuhrparkmanagement
□ Sonstiges: [Bitte spezifizieren]

Mein Anliegen:
[Beschreiben Sie hier Ihre spezifischen Anforderungen]

Anzahl Fahrzeuge: [Anzahl]
Zeitraum: [Gewünschter Zeitraum]

Ich freue mich auf Ihr Angebot.

Mit freundlichen Grüßen
[Ihr Name]`,
      
      'kontakt': `Sehr geehrte Damen und Herren,

ich möchte gerne Kontakt mit Ihnen aufnehmen.

Meine Kontaktdaten:
Name: [Ihr Name]
Firma: [Ihre Firma]
Adresse: [Ihre Adresse]
Telefon: [Ihre Telefonnummer]

Mein Anliegen:
[Beschreiben Sie hier Ihr Anliegen oder Ihre Fragen]

Bevorzugte Kontaktaufnahme:
□ E-Mail
□ Telefon
□ Persönlicher Termin

Ich freue mich auf Ihre Rückmeldung.

Mit freundlichen Grüßen
[Ihr Name]`,
      
      'mehr-erfahren': `Sehr geehrte Damen und Herren,

ich möchte gerne mehr über Ihre Services erfahren.

Meine Kontaktdaten:
Name: [Ihr Name]
Firma: [Ihre Firma]
Adresse: [Ihre Adresse]
Telefon: [Ihre Telefonnummer]

Interessensbereich:
□ Fuhrparkmanagement
□ KFZ-Vermietung
□ Beratung
□ Sonstiges: [Bitte spezifizieren]

Mein Anliegen:
[Beschreiben Sie hier, worüber Sie mehr erfahren möchten]

Ich freue mich auf weitere Informationen.

Mit freundlichen Grüßen
[Ihr Name]`
    }[type];

    return `mailto:office@svbg.at?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };


  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#c99a3c] z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center"
            >
              <Image
                src="/logo.svg"
                alt="SVBG GmbH Logo"
                width={120}
                height={40}
                priority
                className="h-8 sm:h-10 w-auto"
              />
            </motion.div>
            <motion.a
              href={createEmailLink('erstgespraech')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(201, 154, 60, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#c99a3c] text-[#1b1464] px-4 py-2 sm:px-6 sm:py-2 rounded-full font-medium text-sm sm:text-base hover:bg-[#b8893a] transition-colors inline-block"
            >
              Jetzt Erstgespräch sichern
            </motion.a>
          </div>
        </div>
      </motion.header>

      <main>
        {/* Hero Section with Background Video */}
        <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Video with Parallax */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            style={{ y: y1 }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/video/1.mp4" type="video/mp4" />
              <source src="/video/2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* Animated Overlays */}
          <motion.div 
            className="absolute inset-0 bg-black/50 z-10"
            style={{ opacity }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-[#1b1464]/70 via-transparent to-[#1b1464]/70 z-20"
            style={{ opacity }}
          />

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-4 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 bg-[#c99a3c] rounded-full opacity-30"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-4 sm:right-20 w-4 h-4 sm:w-6 sm:h-6 bg-white/20 rounded-full"
            animate={{
              y: [0, 30, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Content with Parallax */}
          <motion.div 
            className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            style={{ y: y2, scale }}
          >
            <motion.div 
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center"
            >
              <motion.div
                variants={fadeInUp}
                className="mb-8"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    filter: "drop-shadow(0 25px 50px rgba(201, 154, 60, 0.4))"
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/logo2.svg"
                    alt="SVBG GmbH Logo"
                    width={250}
                    height={100}
                    className="h-12 sm:h-16 md:h-20 w-auto mx-auto mb-6 sm:mb-8 drop-shadow-2xl"
                  />
                </motion.div>
              </motion.div>
              <motion.h1 
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 font-[family-name:var(--font-heading)] drop-shadow-lg"
              >
                <motion.span
                  whileInView={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="bg-gradient-to-r from-white via-[#c99a3c] to-white bg-clip-text text-transparent bg-[length:200%_auto]"
                >
                  Ihr Partner für
                </motion.span>
                <br />
                <motion.span 
                  className="text-[#c99a3c]"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  whileHover={{ 
                    textShadow: "0 0 20px rgba(201, 154, 60, 0.8)",
                    scale: 1.05 
                  }}
                >
                  Fuhrparkmanagement
                </motion.span>
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto drop-shadow-md px-4"
              >
                Professionelle KFZ-Vermietung und maßgeschneidertes Flottenmanagement 
                vertrauensvoll, kompetent, exklusiv.
              </motion.p>
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4"
              >
                <motion.a
                  href={createEmailLink('angebot')}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(201, 154, 60, 0.4)",
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#c99a3c] text-[#1b1464] px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-full font-bold text-base sm:text-lg md:text-xl hover:bg-[#b8893a] transition-colors shadow-2xl inline-block text-center"
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="inline-block"
                  >
                    Angebot anfordern
                  </motion.span>
                </motion.a>
                <motion.a
                  href={createEmailLink('kontakt')}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    color: "#1b1464",
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white bg-white/10 backdrop-blur-sm px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-full font-bold text-base sm:text-lg md:text-xl transition-all shadow-2xl inline-block text-center"
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="inline-block"
                  >
                    Kontakt aufnehmen
                  </motion.span>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.2 }}
              className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center cursor-pointer"
              onClick={() => uspRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2"
              />
            </motion.div>
            <motion.p 
              className="text-white text-sm mt-2 text-center"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll down
            </motion.p>
          </motion.div>
        </section>

        {/* USP Section with Advanced Animations */}
        <section ref={uspRef} className="py-20 bg-white relative overflow-hidden">
          {/* Background Elements */}
          <motion.div 
            className="absolute top-0 right-0 w-64 h-64 bg-[#f8f8f8] rounded-full -translate-y-32 translate-x-32 opacity-50"
            style={{ y: y3 }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-[#c99a3c]/10 to-transparent rounded-full translate-y-24 -translate-x-24"
            style={{ y: y2 }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-16"
            >
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1b1464] mb-4 font-[family-name:var(--font-heading)]"
                whileInView={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{
                  background: "linear-gradient(90deg, #1b1464, #c99a3c, #1b1464)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Warum SVBG GmbH?
              </motion.h2>
              <motion.p 
                className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Unsere Expertise macht den Unterschied für Ihren Fuhrpark
              </motion.p>
            </motion.div>
            <motion.div 
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true, amount: 0.1 }}
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4"
            >
              {[
                {
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                  title: "Zuverlässigkeit",
                  desc: "Vertrauen Sie auf jahrelange Erfahrung und bewährte Prozesse für Ihr Flottenmanagement."
                },
                {
                  icon: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z",
                  title: "Persönliche Betreuung",
                  desc: "Individueller Service und maßgeschneiderte Lösungen für Ihre spezifischen Anforderungen."
                },
                {
                  icon: "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z",
                  title: "Effiziente Lösungen",
                  desc: "Modernste Verwaltungssysteme und optimierte Prozesse für maximale Effizienz."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.1)"
                  }}
                  className="text-center p-8 bg-[#f8f8f8] rounded-lg transition-all duration-300 cursor-pointer group"
                >
                  <motion.div 
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      boxShadow: "0 10px 30px rgba(201, 154, 60, 0.3)"
                    }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#c99a3c] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-[#b8893a] transition-colors"
                  >
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#1b1464]" fill="currentColor" viewBox="0 0 20 20">
                      <path d={item.icon}></path>
                    </svg>
                  </motion.div>
                  <motion.h3 
                    className="text-lg sm:text-xl font-bold text-[#1b1464] mb-3 sm:mb-4 font-[family-name:var(--font-heading)]"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm sm:text-base text-gray-600"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {item.desc}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* About Section with Parallax */}
        <section ref={aboutRef} className="py-20 bg-[#f8f8f8] relative overflow-hidden">
          {/* Parallax Background Elements */}
          <motion.div 
            className="absolute top-20 left-20 w-32 h-32 bg-[#c99a3c]/10 rounded-full"
            style={{ y: y1, rotate: scrollY }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-24 h-24 bg-[#1b1464]/10 rounded-full"
            style={{ y: y3, rotate: scrollY }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.h2 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1b1464] mb-4 sm:mb-6 font-[family-name:var(--font-heading)]"
                  whileInView={{ 
                    textShadow: ["0 0 0px rgba(27, 20, 100, 0)", "0 0 20px rgba(27, 20, 100, 0.3)", "0 0 0px rgba(27, 20, 100, 0)"],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  viewport={{ once: true }}
                >
                  Über SVBG GmbH
                </motion.h2>
                <motion.p 
                  className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Mit Sitz in Unterwaltersdorf bieten wir professionelles Fuhrparkmanagement 
                  und KFZ-Vermietung für Unternehmen jeder Größe. Unser Fokus liegt auf 
                  zuverlässigen, effizienten Lösungen, die Ihren Geschäftserfolg unterstützen.
                </motion.p>
                <motion.p 
                  className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Vertrauen Sie auf unsere langjährige Erfahrung und lassen Sie sich von 
                  unserem persönlichen Service überzeugen. Wir verstehen Ihre Bedürfnisse 
                  und entwickeln gemeinsam die optimale Flottenstrategie.
                </motion.p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={createEmailLink('mehr-erfahren')}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 15px 35px rgba(201, 154, 60, 0.3)",
                      y: -3
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#c99a3c] text-[#1b1464] px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#b8893a] transition-colors inline-block text-center"
                  >
                    Mehr erfahren
                  </motion.a>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 100, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                className="bg-white p-8 rounded-lg shadow-lg perspective-1000"
              >
                <motion.h3 
                  className="text-lg sm:text-xl font-bold text-[#1b1464] mb-3 sm:mb-4 font-[family-name:var(--font-heading)]"
                  whileHover={{ scale: 1.05, color: "#c99a3c" }}
                >
                  Kontaktdaten
                </motion.h3>
                <div className="space-y-3 text-gray-600">
                  {[
                    { icon: "📍", text: "Matthäus Mayer-Gasse 18\n2442 Unterwaltersdorf" },
                    { icon: "📧", text: "office@svbg.at" },
                    { icon: "🏢", text: "FN 658905 d" }
                  ].map((item, index) => (
                    <motion.p 
                      key={index}
                      whileHover={{ 
                        x: 10, 
                        color: "#c99a3c",
                        scale: 1.02
                      }}
                      className="cursor-default transition-colors"
                    >
                      {item.text.includes('\n') ? (
                        <>
                          {item.icon} {item.text.split('\n')[0]}<br />{item.text.split('\n')[1]}
                        </>
                      ) : (
                        `${item.icon} ${item.text}`
                      )}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Large CTA Section with Advanced Effects */}
        <motion.section 
          ref={ctaRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="py-20 bg-[#1b1464] relative overflow-hidden"
        >
          {/* Enhanced Animated Background Elements */}
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-10 right-10 w-32 h-32 bg-[#c99a3c] rounded-full"
          />
          <motion.div 
            animate={{ 
              rotate: -360,
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-10 left-10 w-24 h-24 bg-[#c99a3c] rounded-full"
          />
          
          {/* Additional floating elements */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/20 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, 40, 0],
              x: [0, -15, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-[#c99a3c]/30 rounded-full"
          />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 font-[family-name:var(--font-heading)] px-4"
              whileHover={{
                textShadow: "0 0 30px rgba(255, 255, 255, 0.5)",
                scale: 1.02
              }}
            >
              Bereit für professionelles Fuhrparkmanagement?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4"
            >
              Lassen Sie uns gemeinsam die optimale Lösung für Ihren Fuhrpark entwickeln. 
              Kontaktieren Sie uns noch heute für ein unverbindliches Erstgespräch.
            </motion.p>
            <motion.a
              href={createEmailLink('erstgespraech')}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 25px 50px rgba(201, 154, 60, 0.4)",
                y: -5,
                background: "linear-gradient(45deg, #c99a3c, #d4a950)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#c99a3c] text-[#1b1464] px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-4 rounded-full font-bold text-base sm:text-lg md:text-xl hover:bg-[#b8893a] transition-all duration-300 inline-block"
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="inline-block"
              >
                Jetzt Beratung anfordern
              </motion.span>
            </motion.a>
          </div>
        </motion.section>
      </main>

      {/* Footer with Enhanced Animation */}
      <motion.footer 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.1 }}
        className="bg-white py-12 border-t border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
          >
            <motion.div variants={fadeInUp}>
              <motion.div 
                className="flex items-center mb-4"
                whileHover={{ scale: 1.05 }}
              >
                                  <Image
                    src="/logo.svg"
                    alt="SVBG GmbH Logo"
                    width={100}
                    height={35}
                    className="h-6 sm:h-8 w-auto"
                  />
              </motion.div>
                              <motion.p 
                  className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm"
                  whileHover={{ color: "#1b1464" }}
                >
                  Ihr vertrauensvoller Partner für Fuhrparkmanagement und KFZ-Vermietung 
                  in Wien und Umgebung.
                </motion.p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <motion.h4 
                className="font-semibold text-[#1b1464] mb-3 sm:mb-4 text-sm sm:text-base"
                whileHover={{ scale: 1.05, color: "#c99a3c" }}
              >
                Kontakt
              </motion.h4>
              <div className="space-y-2 text-gray-600">
                {["Matthäus Mayer-Gasse 18", "2442 Unterwaltersdorf", "office@svbg.at"].map((item, index) => (
                  <motion.p 
                    key={index}
                    whileHover={{ x: 5, color: "#1b1464" }}
                    className="transition-colors cursor-default text-xs sm:text-sm"
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <motion.h4 
                className="font-semibold text-[#1b1464] mb-3 sm:mb-4 text-sm sm:text-base"
                whileHover={{ scale: 1.05, color: "#c99a3c" }}
              >
                Rechtliches
              </motion.h4>
              <div className="space-y-2">
                {[
                  { href: "/impressum", text: "Impressum" },
                  { href: "/datenschutz", text: "Datenschutz" }
                ].map((link, index) => (
                  <Link key={index} href={link.href}>
                    <motion.span 
                      whileHover={{ 
                        x: 10, 
                        color: "#c99a3c",
                        scale: 1.05
                      }}
                      className="text-gray-600 hover:text-[#c99a3c] transition-all block cursor-pointer text-xs sm:text-sm"
                    >
                      {link.text}
                    </motion.span>
                  </Link>
                ))}
                <motion.p 
                  className="text-gray-600 text-xs sm:text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  FN 658905 d
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600"
          >
            <motion.p className="text-xs sm:text-sm" whileHover={{ scale: 1.02 }}>
              &copy; 2024 SVBG GmbH. Alle Rechte vorbehalten.
            </motion.p>
            <motion.p 
              className="text-xs sm:text-sm mt-2"
              whileHover={{ scale: 1.02 }}
            >
              Powered by{" "}
              <motion.a 
                href="https://nextgen-media-factory.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#c99a3c] hover:underline font-medium transition-colors"
                whileHover={{ 
                  scale: 1.1,
                  textShadow: "0 0 10px rgba(201, 154, 60, 0.5)"
                }}
              >
                NextGen Media Factory GmbH
              </motion.a>
            </motion.p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
