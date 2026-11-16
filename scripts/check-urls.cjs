const fs = require('fs');

const cat = fs.readFileSync('src/data/categories.ts', 'utf8');
const prod = fs.readFileSync('src/data/products.ts', 'utf8');
const hero = fs.readFileSync('src/components/home/HeroSection.tsx', 'utf8');
const banners = fs.readFileSync('src/components/home/CommercialLinesBanner.tsx', 'utf8');

const allText = cat + '\n' + prod + '\n' + hero + '\n' + banners;
const urls = Array.from(new Set([...allText.matchAll(/https:\/\/images\.unsplash\.com\/[^\s'"`]+/g)].map(m => m[0])));

console.log('Testing', urls.length, 'unique URLs...');

async function testUrls() {
  for (const u of urls) {
    try {
      const res = await fetch(u, { method: 'HEAD' });
      console.log(res.status === 200 ? '✅ 200' : '❌ ' + res.status, u);
    } catch (err) {
      console.log('❌ ERR', u, err.message);
    }
  }
}

testUrls();
