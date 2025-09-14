export default async function handler(req, res) {
    try {
      const response = await fetch("https://api.goaffpro.com/v1/admin/traffic", {
        headers: {
          "e927b41f9f486dc60ecfdabc20c6af3a1244e6d3e7467fa25f497da2998ebd24": process.env.GOAFFPRO_ACCESS_TOKEN,
          "e927b41f9f486dc60ecfdabc20c6af3a1244e6d3e7467fa25f497da2998ebd24": process.env.GOAFFPRO_PUBLIC_TOKEN,
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        return res.status(response.status).json({ error: "Erreur API GoAffPro" });
      }
  
      const data = await response.json();
  
      // Nombre total de visites (Page Views)
      const pageViews = data.traffic?.length ?? 0;
  
      return res.status(200).json({ pageViews });
    } catch (error) {
      console.error("Erreur GoAffPro:", error);
      return res.status(500).json({ error: "Erreur serveur" });
    }
  }
  