import { NextApiResponse } from 'next';

const EXTERNAL_DATA_URL = '';

function generateSiteMap(posts: { id: number }[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc></loc>
     </url>
     <url>
       <loc></loc>
     </url>
     ${posts
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

export default function SiteMap() {
  return null; 
}

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();
  const sitemap = generateSiteMap(posts);
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
