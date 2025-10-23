import { getPosts } from '../utils/mdx-utils';

function generateSiteMap(posts) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${siteUrl}</loc>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     ${posts
       .map((post) => {
         return `
       <url>
           <loc>${siteUrl}/posts/${post.filePath.replace(/\.mdx?$/, '')}</loc>
           <lastmod>${new Date(post.data.date).toISOString()}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.8</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const posts = getPosts();

  // Generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // Write the XML to the response
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;