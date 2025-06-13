import Image from "next/image";

export default function VotzenWebsite() {
  return (
    <div className="min-h-screen bg-neutral-100 text-black p-6 space-y-10">
      <header className="text-center space-y-4">
        <Image
          src="/logo-votzen.png"
          alt="VOTZEN Logo"
          width={120}
          height={120}
          className="mx-auto"
        />
        <h1 className="text-5xl font-extrabold">VOTZEN</h1>
        <p className="text-xl font-semibold italic">
          Gezeichnet mit Liebe, gerechnet mit Härte.
        </p>
      </header>

      <section className="flex justify-center">
        <Image
          src="/team-thermomix.png"
          alt="Teamfoto mit Thermomix-Hybrid"
          width={800}
          height={500}
          className="rounded-2xl shadow-md"
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <h2 className="text-2xl font-bold">Was wir bieten</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>💚 1x/Monat Matcha-Spinat-Smoothie (vegan, grün, fragwürdig)</li>
            <li>🧠 Projekte zwischen Wahnsinn und Weltverbesserung</li>
            <li>🕹️ Halber Kickertisch im Keller (unteres Drittel fehlt)</li>
            <li>🪴 Sukkulente Kevin wacht über deine Ideen</li>
            <li>🧘‍♀️ Slack-Channel für emotionale Zusammenbrüche</li>
            <li>🎞️ Büro-GIFs zur Motivation – powered by Giphy™</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <h2 className="text-2xl font-bold">Wen wir suchen</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Menschen, die nicht ins gemachte Nest wollen</li>
            <li>Woke ist für dich Lebensphilosophie, nicht Buzzword</li>
            <li>Du schaffst lieber statt zu chillen – oder beides gleichzeitig</li>
            <li>Thermomix-Identifikation ist kein Muss, aber nice</li>
            <li>Dein Herz schlägt für Zahlen UND Design</li>
          </ul>
        </div>
      </section>

      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Join us – oder ghost uns stilvoll</h2>
        <p className="text-lg">
          Schick uns kein klassisches PDF. Erzähl uns einfach, warum du denkst, dass dein Chaos zu unserem passt.
        </p>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Dein Name"
            className="w-full p-3 rounded border border-gray-300"
            required
          />
          <input
            type="email"
            placeholder="Deine E-Mail"
            className="w-full p-3 rounded border border-gray-300"
            required
          />
          <textarea
            placeholder="Warum du VOTZEN willst..."
            className="w-full p-3 rounded border border-gray-300"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full text-lg py-3 bg-black text-white rounded hover:bg-gray-800"
          >
            Bewerbung abschicken
          </button>
        </form>
        <p className="text-sm italic">Oder TikTok-Duett. Wir sind offen.</p>
      </section>

      <footer className="text-center pt-10 text-gray-500">
        <p>© 2025 VOTZEN GmbH – made with Liebe und ein bisschen Excel</p>
      </footer>
    </div>
  );
}