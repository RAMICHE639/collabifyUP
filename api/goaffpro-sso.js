export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  const ACCESS_TOKEN = process.env.GOAFFPRO_ACCESS_TOKEN;
  const STORE_URL = "https://ritashape.goaffpro.com";

  const ssoUrl = `${STORE_URL}/sso?email=${encodeURIComponent(email)}&key=${ACCESS_TOKEN}`;
  res.status(200).json({ redirect: ssoUrl });
}
