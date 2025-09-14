
  
  export default async function handler(req, res) {
    try {
      const response = await fetch("https://api.goaffpro.com/v1/admin/stats", {
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
  
      // Adapte selon la vraie structure du JSON
      const stats = {
        pageViews: data.page_views_total ?? 0,
        affiliates: data.affiliates_total ?? 0,
        orders: data.orders_total ?? 0,
        revenue: data.revenue_total ?? 0,
        commissions: data.commissions_total ?? 0
      };
  
      return res.status(200).json(stats);
  
    } catch (error) {
      console.error("Erreur GoAffPro:", error);
      return res.status(500).json({ error: "Erreur serveur" });
    }
  }
  