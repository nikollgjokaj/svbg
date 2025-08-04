"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Datenschutz() {
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
              Datenschutzerklärung
            </motion.h1>

            <motion.div variants={fadeInUp} className="prose prose-lg max-w-none">
              
              {/* Allgemeine Hinweise */}
              <motion.section variants={fadeInUp} className="mb-8">
                <h2 className="text-2xl font-bold text-[#1b1464] mb-4 font-[family-name:var(--font-heading)]">
                  Allgemeine Hinweise
                </h2>
                <div className="bg-[#f8f8f8] p-6 rounded-lg text-sm leading-relaxed">
                  <p className="mb-4">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                    personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene 
                    Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. 
                    Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem 
                    Text aufgeführten Datenschutzerklärung.
                  </p>
                </div>
              </motion.section>

              {/* Verantwortliche Stelle */}
              <motion.section variants={fadeInUp} className="mb-8">
                <h2 className="text-2xl font-bold text-[#1b1464] mb-4 font-[family-name:var(--font-heading)]">
                  Verantwortliche Stelle
                </h2>
                <div className="bg-[#f8f8f8] p-6 rounded-lg">
                  <p className="text-lg mb-2"><strong>SVBG GmbH</strong></p>
                  <p className="mb-2">Matthäus Mayer-Gasse 18</p>
                  <p className="mb-2">2442 Unterwaltersdorf</p>
                  <p className="mb-2">Österreich</p>
                  <p className="mb-2"><strong>E-Mail:</strong> office@svbg.at</p>
                  <p className="mb-2"><strong>Telefon:</strong> [Wird ergänzt]</p>
                  <br />
                  <p className="text-sm">
                    Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder 
                    gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen 
                    Daten entscheidet.
                  </p>
                </div>
              </motion.section>

              {/* Datenerfassung */}
              <motion.section variants={fadeInUp} className="mb-8">
                <h2 className="text-2xl font-bold text-[#1b1464] mb-4 font-[family-name:var(--font-heading)]">
                  Datenerfassung auf unserer Website
                </h2>
                
                <h3 className="text-xl font-semibold text-[#1b1464] mb-3">
                  Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                </h3>
                <div className="bg-[#f8f8f8] p-6 rounded-lg mb-6 text-sm leading-relaxed">
                  <p className="mb-4">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                    Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-[#1b1464] mb-3">
                  Wie erfassen wir Ihre Daten?
                </h3>
                <div className="bg-[#f8f8f8] p-6 rounded-lg mb-6 text-sm leading-relaxed">
                  <p className="mb-4">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                    Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                  </p>
                  <p className="mb-4">
                    Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. 
                    Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit 
                    des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere 
                    Website betreten.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-[#1b1464] mb-3">
                  Wofür nutzen wir Ihre Daten?
                </h3>
                <div className="bg-[#f8f8f8] p-6 rounded-lg mb-6 text-sm leading-relaxed">
                  <p className="mb-4">
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website 
                    zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  </p>
                </div>
              </motion.section>

              {/* Ihre Rechte */}
              <motion.section variants={fadeInUp} className="mb-8">
                <h2 className="text-2xl font-bold text-[#1b1464] mb-4 font-[family-name:var(--font-heading)]">
                  Ihre Rechte bezüglich Ihrer Daten
                </h2>
                <div className="bg-[#f8f8f8] p-6 rounded-lg text-sm leading-relaxed">
                  <p className="mb-4">
                    Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und 
                    Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem 
                    ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.
                  </p>
                  <p className="mb-4">
                    Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit 
                    unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen 
                    ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                  </p>
                  <p className="mb-4">
                    Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der 
                    Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                  </p>
                </div>
              </motion.section>

              {/* Server-Log-Dateien */}
              <motion.section variants={fadeInUp} className="mb-8">
                <h2 className="text-2xl font-bold text-[#1b1464] mb-4 font-[family-name:var(--font-heading)]">
                  Server-Log-Dateien
                </h2>
                <div className="bg-[#f8f8f8] p-6 rounded-lg text-sm leading-relaxed">
                  <p className="mb-4">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in 
                    so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. 
                    Dies sind:
                  </p>
                  <ul className="list-disc list-inside mb-4 space-y-1">
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                  <p className="mb-4">
                    Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                  </p>
                  <p className="mb-4">
                    Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. 
                    Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien 
                    Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files 
                    erfasst werden.
                  </p>
                </div>
              </motion.section>

              {/* Kontaktformular */}
              <motion.section variants={fadeInUp} className="mb-8">
                <h2 className="text-2xl font-bold text-[#1b1464] mb-4 font-[family-name:var(--font-heading)]">
                  Kontaktformular
                </h2>
                <div className="bg-[#f8f8f8] p-6 rounded-lg text-sm leading-relaxed">
                  <p className="mb-4">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
                    dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
                    Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                  </p>
                  <p className="mb-4">
                    Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung der 
                    in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage 
                    Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                  </p>
                  <p className="mb-4">
                    Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose 
                    Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten 
                    Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
                  </p>
                  <p className="mb-4">
                    Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie 
                    uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder 
                    der Zweck für die Datenspeicherung entfällt.
                  </p>
                </div>
              </motion.section>

              {/* E-Mail, Telefon und Fax */}
              <motion.section variants={fadeInUp} className="mb-8">
                <h2 className="text-2xl font-bold text-[#1b1464] mb-4 font-[family-name:var(--font-heading)]">
                  Anfrage per E-Mail, Telefon oder Telefax
                </h2>
                <div className="bg-[#f8f8f8] p-6 rounded-lg text-sm leading-relaxed">
                  <p className="mb-4">
                    Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage 
                    inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) 
                    zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
                  </p>
                  <p className="mb-4">
                    Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung 
                    dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern 
                    Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
                    vorvertraglicher Maßnahmen erforderlich ist.
                  </p>
                  <p className="mb-4">
                    In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung 
                    (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren berechtigten Interessen 
                    (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes Interesse an der 
                    effektiven Bearbeitung der an uns gerichteten Anfragen haben.
                  </p>
                </div>
              </motion.section>

              {/* SSL-Verschlüsselung */}
              <motion.section variants={fadeInUp} className="mb-8">
                <h2 className="text-2xl font-bold text-[#1b1464] mb-4 font-[family-name:var(--font-heading)]">
                  SSL- bzw. TLS-Verschlüsselung
                </h2>
                <div className="bg-[#f8f8f8] p-6 rounded-lg text-sm leading-relaxed">
                  <p className="mb-4">
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung 
                    vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die 
                    Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung.
                  </p>
                  <p className="mb-4">
                    Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des 
                    Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in 
                    Ihrer Browserzeile.
                  </p>
                  <p className="mb-4">
                    Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, 
                    die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                  </p>
                </div>
              </motion.section>

              {/* Datenübertragung bei Vertragsschluss */}
              <motion.section variants={fadeInUp} className="mb-8">
                <h2 className="text-2xl font-bold text-[#1b1464] mb-4 font-[family-name:var(--font-heading)]">
                  Datenübertragung bei Vertragsschluss
                </h2>
                <div className="bg-[#f8f8f8] p-6 rounded-lg text-sm leading-relaxed">
                  <p className="mb-4">
                    Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen 
                    der Vertragsabwicklung notwendig ist, etwa an das mit der Zahlungsabwicklung 
                    beauftragte Kreditinstitut.
                  </p>
                  <p className="mb-4">
                    Eine weitergehende Übermittlung der Daten erfolgt nicht bzw. nur dann, wenn 
                    Sie der Übermittlung ausdrücklich zugestimmt haben. Eine Weitergabe Ihrer Daten 
                    an Dritte ohne ausdrückliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht.
                  </p>
                  <p className="mb-4">
                    Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die 
                    Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher 
                    Maßnahmen gestattet.
                  </p>
                </div>
              </motion.section>

              {/* Widerspruch Werbe-Mails */}
              <motion.section variants={fadeInUp} className="mb-8">
                <h2 className="text-2xl font-bold text-[#1b1464] mb-4 font-[family-name:var(--font-heading)]">
                  Widerspruch gegen Werbe-E-Mails
                </h2>
                <div className="bg-[#f8f8f8] p-6 rounded-lg text-sm leading-relaxed">
                  <p className="mb-4">
                    Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten 
                    zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien 
                    wird hiermit widersprochen.
                  </p>
                  <p className="mb-4">
                    Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle 
                    der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
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
                    Diese Datenschutzerklärung wurde mit größter Sorgfalt erstellt und entspricht 
                    den aktuellen Bestimmungen der DSGVO.
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
                <Link href="/impressum" className="text-gray-600 hover:text-[#c99a3c] transition-colors block">
                  Impressum
                </Link>
                <Link href="/datenschutz" className="text-[#c99a3c] hover:underline block font-semibold">
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