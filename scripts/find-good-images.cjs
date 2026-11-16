const candidateUrls = [
  // Auto parts / engine / mechanic
  'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98', // engine bay
  'https://images.unsplash.com/photo-1487754180451-c456f719a1fc', // mechanic workshop
  'https://images.unsplash.com/photo-1580273916550-e323be2ae537', // car engine
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70', // car
  'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f', // mechanic tools
  'https://images.unsplash.com/photo-1563720223185-11003d516935', // engine parts
  'https://images.unsplash.com/photo-1511919884226-fd3cad34687c', // sports car / auto
  // Oil / lubricants
  'https://images.unsplash.com/photo-1615906655593-ad0386982a0f', // car maintenance oil
  'https://images.unsplash.com/photo-1580273916550-e323be2ae537',
  // Construction / hardware / tools
  'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8', // tools & screws
  'https://images.unsplash.com/photo-1572981779307-38b8cabb2407', // hardware screws
  'https://images.unsplash.com/photo-1530124566582-a618bc2615dc', // carpentry/construction
];

async function test() {
  for (const u of candidateUrls) {
    try {
      const res = await fetch(u + '?w=800&fit=crop&q=80', { method: 'HEAD' });
      console.log(res.status, u);
    } catch (e) {
      console.log('ERR', u);
    }
  }
}

test();
