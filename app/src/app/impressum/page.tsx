"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Impressum() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-white shadow-sm sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Image
                  src="/logo.svg"
                  alt="SVBG GmbH Logo"
                  width={120}
                  height={40}
                  priority
                  className="h-10 w-auto"
                />
              </motion.div>
            </Link>
            <Link href="/">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#c99a3c] text-[#1b1464] px-6 py-2 rounded-full font-medium hover:bg-[#b8893a] transition-colors"
              >
                Zurück zur Startseite
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.header>

      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-[#1b1464] mb-8 font-[family-name:var(--font-heading)]"
            >
              Impressum
            </motion.h1>

            <motion.div variants={fadeInUp} className="prose prose-lg max-w-none">
              
              {/* Firmeninformationen */}
              <motion.section variants={fadeInUp} className="mb-8">
                <h2 className="text-2xl font-bold text-[#1b1464] mb-4 font-[family-name:var(--font-heading)]">
                  Firmeninformationen
                </h2>
                <div className="bg-[#f8f8f8] p-6 rounded-lg">
                  <p className="text-lg mb-2"><strong>SVBG GmbH</strong></p>
                  <p className="mb-2">Matthäus Mayer-Gasse 18</p>
                  <p className="mb-2">2442 Unterwaltersdorf</p>
                  <p className="mb-2">Österreich</p>
                  <p className="mb-2"><strong>E-Mail:</strong> office@svbg.at</p>
                  <p className="mb-2"><strong>Firmenbuchnummer:</strong> FN 658905 d</p>
                  <p className="mb-2"><strong>Firmenbuchgericht:</strong> Handelsgericht Wien</p>
                  <p className="mb-2"><strong>UID-Nummer:</strong> ATU [Wird ergänzt]</p>
                </div>
              </motion.section>

              {/* Vertretungsberechtigte */}
              <motion.section variants={fadeInUp} className="mb-8">
                <h2 className="text-2xl font-bold text-[#1b1464] mb-4 font-[family-name:var(--font-heading)]">
                  Vertretungsberechtigte Geschäftsführung
                </h2>
                <div className="bg-[#f8f8f8] p-6 rounded-lg">
                  <p className="text-lg">Dajana Bilbija</p>
                </div>
              </motion.section>

              {/* Unternehmensgegenstand */}
              <motion.section variants={fadeInUp} className="mb-8">
                <h2 className="text-2xl font-bold text-[#1b1464] mb-4 font-[family-name:var(--font-heading)]">
                  Unternehmensgegenstand
                </h2>
                <div className="bg-[#f8f8f8] p-6 rounded-lg">
                  <p className="mb-2">• Fuhrparkmanagement</p>
                  <p className="mb-2">• KFZ-Vermietung</p>
                  <p className="mb-2">• Flottenmanagement</p>
                  <p className="mb-2">• Fahrzeugverwaltung</p>
                </div>
              </motion.section>

              {/* Aufsichtsbehörde */}
              <motion.section variants={fadeInUp} className="mb-8">
                <h2 className="text-2xl font-bold text-[#1b1464] mb-4 font-[family-name:var(--font-heading)]">
                  Aufsichtsbehörde
                </h2>
                <div className="bg-[#f8f8f8] p-6 rounded-lg">
                  <p className="mb-2">Bezirkshauptmannschaft Baden</p>
                  <p className="mb-2">Schwartzstraße 50</p>
                  <p className="mb-2">2500 Baden</p>
                  <p className="mb-2">Österreich</p>
                </div>
              </motion.section>

              {/* Berufsrechtliche Regelungen */}
              <motion.section variants={fadeInUp} className="mb-8">
                <h2 className="text-2xl font-bold text-[#1b1464] mb-4 font-[family-name:var(--font-heading)]">
                  Berufsrechtliche Regelungen
                </h2>
                <div className="bg-[#f8f8f8] p-6 rounded-lg">
                  <p className="mb-2">Es gelten die folgenden berufsrechtlichen Regelungen:</p>
                  <p className="mb-2">• Gewerbeordnung (GewO)</p>
                  <p className="mb-2">• Kraftfahrliniengesetz (KflG)</p>
                  <p className="mb-2">• Gelegenheitsverkehrs-Gesetz (GelverkG)</p>
                </div>
              </motion.section>

              {/* Haftungsausschluss */}
              <motion.section variants={fadeInUp} className="mb-8">
                <h2 className="text-2xl font-bold text-[#1b1464] mb-4 font-[family-name:var(--font-heading)]">
                  Haftungsausschluss
                </h2>
                <div className="bg-[#f8f8f8] p-6 rounded-lg text-sm leading-relaxed">
                  <p className="mb-4">
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                    Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                    nach den allgemeinen Gesetzen verantwortlich.
                  </p>
                  <p className="mb-4">
                    Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, 
                    übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                    zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                  <p className="mb-4">
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                    allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                    erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                  </p>
                </div>
              </motion.section>

              {/* Urheberrecht */}
              <motion.section variants={fadeInUp} className="mb-8">
                <h2 className="text-2xl font-bold text-[#1b1464] mb-4 font-[family-name:var(--font-heading)]">
                  Urheberrecht
                </h2>
                <div className="bg-[#f8f8f8] p-6 rounded-lg text-sm leading-relaxed">
                  <p className="mb-4">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                    dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und 
                    jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                    Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                  <p className="mb-4">
                    Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch 
                    gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden 
                    die Urheberrechte Dritter beachtet.
                  </p>
                </div>
              </motion.section>

              {/* Datenschutz */}
              <motion.section variants={fadeInUp} className="mb-8">
                <h2 className="text-2xl font-bold text-[#1b1464] mb-4 font-[family-name:var(--font-heading)]">
                  Datenschutz
                </h2>
                <div className="bg-[#f8f8f8] p-6 rounded-lg text-sm leading-relaxed">
                  <p className="mb-4">
                    Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. 
                    Soweit auf unseren Seiten personenbezogene Daten erhoben werden, erfolgt dies, soweit möglich, 
                    stets auf freiwilliger Basis.
                  </p>
                  <p className="mb-4">
                    Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. 
                    Wir weisen darauf hin, dass die Datenübertragung im Internet Sicherheitslücken aufweisen kann.
                  </p>
                  <p className="mb-4">
                    Detaillierte Informationen zum Datenschutz finden Sie in unserer 
                    <Link href="/datenschutz" className="text-[#c99a3c] hover:underline font-semibold">
                      {" "}Datenschutzerklärung
                    </Link>.
                  </p>
                </div>
              </motion.section>

              {/* Online-Streitbeilegung */}
              <motion.section variants={fadeInUp} className="mb-8">
                <h2 className="text-2xl font-bold text-[#1b1464] mb-4 font-[family-name:var(--font-heading)]">
                  Online-Streitbeilegung
                </h2>
                <div className="bg-[#f8f8f8] p-6 rounded-lg text-sm leading-relaxed">
                  <p className="mb-4">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                    <a 
                      href="https://ec.europa.eu/consumers/odr/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#c99a3c] hover:underline font-semibold"
                    >
                      {" "}https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>
                  <p className="mb-4">
                    Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, 
                    an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </motion.section>

              {/* Letzte Aktualisierung */}
              <motion.section variants={fadeInUp} className="mb-8">
                <div className="bg-[#1b1464] text-white p-6 rounded-lg text-center">
                  <p className="text-sm">
                    <strong>Stand:</strong> Dezember 2024
                  </p>
                  <p className="text-sm mt-2">
                    Dieses Impressum wurde mit größter Sorgfalt erstellt. 
                    Für die Richtigkeit der Angaben kann jedoch keine Gewähr übernommen werden.
                  </p>
                </div>
              </motion.section>

            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="bg-[#f8f8f8] py-12 border-t border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/logo.svg"
                  alt="SVBG GmbH Logo"
                  width={100}
                  height={35}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-600 mb-4">
                Ihr vertrauensvoller Partner für Fuhrparkmanagement und KFZ-Vermietung 
                in Wien und Umgebung.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#1b1464] mb-4">Kontakt</h4>
              <div className="space-y-2 text-gray-600">
                <p>Matthäus Mayer-Gasse 18</p>
                <p>2442 Unterwaltersdorf</p>
                <p>office@svbg.at</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-[#1b1464] mb-4">Rechtliches</h4>
              <div className="space-y-2">
                <Link href="/impressum" className="text-[#c99a3c] hover:underline block font-semibold">
                  Impressum
                </Link>
                <Link href="/datenschutz" className="text-gray-600 hover:text-[#c99a3c] transition-colors block">
                  Datenschutz
                </Link>
                <p className="text-gray-600 text-sm">FN 658905 d</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 SVBG GmbH. Alle Rechte vorbehalten.</p>
            <p className="text-sm mt-2">
              Powered by{" "}
              <a 
                href="https://nextgen-media-factory.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#c99a3c] hover:underline font-medium transition-colors"
              >
                NextGen Media Factory GmbH
              </a>
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
} 