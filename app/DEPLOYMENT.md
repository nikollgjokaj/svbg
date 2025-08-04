# cPanel Deployment Anleitung für SVBG

Dieses Next.js-Projekt ist jetzt für statisches Hosting auf cPanel konfiguriert.

## 🚀 Deployment Schritte

### 1. Projekt exportieren
```bash
cd app
npm install
npm run export
```

### 2. Upload auf cPanel
1. Nach dem Build findest du einen `out/` Ordner
2. **Komprimiere den INHALT** des `out/` Ordners (nicht den Ordner selbst!)
3. Logge dich in dein cPanel ein
4. Gehe zu **Dateimanager** → `public_html/`
5. Lade das ZIP-Archiv hoch und entpacke es dort
6. Die `.htaccess` Datei wird automatisch mit hochgeladen

### 3. Domain konfigurieren
- Deine Website ist dann unter deiner Domain erreichbar
- z.B. `https://svbg.at`

## ⚙️ Konfiguration

### Next.js Config
- ✅ `output: 'export'` - Statischer Export aktiviert
- ✅ `trailingSlash: true` - Bessere Kompatibilität mit Apache
- ✅ `images: { unoptimized: true }` - Bilder für statisches Hosting optimiert

### .htaccess Features
- ✅ Client-side Routing (React Router Kompatibilität)
- ✅ Gzip Kompression
- ✅ Browser Caching für statische Assets
- ✅ HTTPS Redirect (optional, auskommentiert)

## 🔄 Updates deployen

Für jedes Update:
```bash
npm run export
```
Dann den neuen `out/` Ordner-Inhalt auf cPanel hochladen.

## ✅ Was funktioniert
- ✅ Alle statischen Seiten
- ✅ Client-side Navigation
- ✅ Framer Motion Animationen
- ✅ Responsive Design
- ✅ SEO Metadata

## ❌ Was NICHT funktioniert (normal für statisches Hosting)
- ❌ Server-side Rendering (SSR)
- ❌ API Routes
- ❌ Middleware
- ❌ Dynamische Imports auf Server-Seite

## 🎯 Performance
- Optimiert für schnelle Ladezeiten
- Alle Assets werden vom Browser gecacht
- Gzip-Kompression reduziert Dateigröße

---

**Hinweis:** Das Projekt verwendet nur client-side Features und ist perfekt für statisches Hosting geeignet! 