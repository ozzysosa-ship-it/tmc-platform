export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).end();

  const { evento, propuesta, timestamp, userAgent } = req.body;

  // Log estructurado — visible en Vercel Dashboard → Logs
  console.log(JSON.stringify({
    tipo: "TMC_TRACKING",
    evento,
    propuesta,
    timestamp,
    ip: req.headers["x-forwarded-for"] || "unknown",
    dispositivo: userAgent || "unknown"
  }));

  // Notificación push vía ntfy.sh
  const NTFY_TOPIC = process.env.NTFY_TOPIC;
  const emoji = evento === "propuesta_abierta" ? "👁️" : "🔓";
  const mensaje = evento === "propuesta_abierta"
    ? `${emoji} [${propuesta}] Link abierto`
    : `${emoji} [${propuesta}] Propuesta desbloqueada ← Leyó`;

  await fetch(`https://ntfy.sh/${NTFY_TOPIC}`, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
      "Title": "Taller Mayor · Propuesta",
      "Priority": evento === "propuesta_desbloqueada" ? "high" : "default",
      "Tags": evento === "propuesta_desbloqueada" ? "unlock,eyes" : "link,eyes"
    },
    body: mensaje
  });

  return res.status(200).json({ ok: true });
}
