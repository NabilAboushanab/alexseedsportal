export const ARTICLE_PER_PAGE=6;
//export const DOMAIN="http://localhost:3000";


export const DOMAIN = process.env.NODE_ENV === "production"
    ? "http://your-production-domain.com"
    : "http://localhost:3000"; // مسار خادم التطوير
