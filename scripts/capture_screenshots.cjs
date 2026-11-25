const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const OUTPUT_DIR = path.join(__dirname, 'screenshots');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function capture() {
  console.log('Iniciando captura perfeccionada con Edge...');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });

  async function take(url, filename, action) {
    console.log(`Navegando a: ${url}`);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    // Wait for splash screen
    await new Promise(r => setTimeout(r, 2200));

    if (action) {
      try {
        await action(page);
      } catch (e) {
        console.log(`Accion opcional fallo en ${filename}: ${e.message}`);
      }
    }

    const outPath = path.join(OUTPUT_DIR, filename);
    await page.screenshot({ path: outPath, fullPage: false });
    console.log(`Captura guardada: ${filename}`);
  }

  // 1. Inicio / Home Hero
  await take('http://localhost:5173/', '01_inicio.png');

  // 2. Login comercial interactivo
  await take('http://localhost:5173/login', '02_login.png', async (p) => {
    const inputName = await p.$('#name');
    if (inputName) {
      await inputName.type('Taller Automotriz Santa Rosa S.A.C.');
    }
    const inputEmail = await p.$('#email');
    if (inputEmail) {
      await inputEmail.type('operaciones@santarosa.pe');
    }
    await new Promise(r => setTimeout(r, 500));
  });

  // 3. Catálogo general con filtros
  await take('http://localhost:5173/catalogo', '03_catalogo.png');

  // 4. Categoría automotriz (Aros y Neumáticos)
  await take('http://localhost:5173/categorias/aros-y-neumaticos', '04_categoria.png');

  // 5. Ficha técnica de producto en alta resolución
  await take('http://localhost:5173/productos/iron-blood-limpiador-ferrico-de-aros', '05_producto_detalle.png');

  // 6. Vista de Cotización / Pedido
  await take('http://localhost:5173/cotizar', '06_cotizacion.png');

  // 7. Servicios especializados y Nosotros
  await take('http://localhost:5173/nosotros', '07_servicios_taller.png');

  // 8. Pie de página y canales de atención
  await take('http://localhost:5173/', '08_contacto_footer.png', async (p) => {
    await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await new Promise(r => setTimeout(r, 1200));
  });

  await browser.close();
  console.log('Capturas perfeccionadas finalizadas exitosamente.');
}

capture().catch(err => {
  console.error('Error al capturar:', err);
  process.exit(1);
});
