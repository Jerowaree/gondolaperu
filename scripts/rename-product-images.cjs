// =============================================================================
// SCRIPT — Renombrar imágenes de productos a kebab-case
// Uso: node scripts/rename-product-images.cjs [carpeta] [--dry]
//   carpeta  (opcional) Ruta a la carpeta de imágenes. Default: public/productos
//   --dry    (opcional) Solo muestra qué se renombraría, sin tocar archivos
// =============================================================================

const fs = require('fs')
const path = require('path')

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif'])

const args = process.argv.slice(2)
const dryRun = args.includes('--dry')
const folderArg = args.find((a) => !a.startsWith('--'))
const folder = path.resolve(folderArg || 'public/productos')

if (!fs.existsSync(folder)) {
  console.error(`❌ No existe la carpeta: ${folder}`)
  process.exit(1)
}

function toKebabCase(filename) {
  const ext = path.extname(filename).toLowerCase()
  const base = path.basename(filename, path.extname(filename))

  const slug = base
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // quita acentos
    .toLowerCase()
    .replace(/[()[\]{}]/g, ' ') // paréntesis y corchetes → espacio
    .replace(/[^a-z0-9]+/g, '-') // cualquier no-alfanumérico → guion
    .replace(/^-+|-+$/g, '') // recorta guiones de los extremos
    .replace(/-{2,}/g, '-') // colapsa guiones dobles

  return slug + ext
}

const files = fs.readdirSync(folder).filter((f) => IMAGE_EXT.has(path.extname(f).toLowerCase()))

if (files.length === 0) {
  console.log(`No hay imágenes en ${folder}`)
  process.exit(0)
}

let renamed = 0
let skipped = 0
const collisions = []

// Detectar colisiones antes de renombrar
const usedNames = new Set(files.map((f) => f.toLowerCase()))
for (const file of files) {
  const target = toKebabCase(file)
  if (target === file) continue
  if (usedNames.has(target.toLowerCase()) && target !== file) {
    collisions.push(`${file} → ${target} (el destino ya existe)`)
  }
}

if (collisions.length > 0) {
  console.warn('⚠️  Colisiones detectadas (no se renombrarán estos):')
  collisions.forEach((c) => console.warn('   ' + c))
}

for (const file of files) {
  const target = toKebabCase(file)
  if (target === file) {
    skipped++
    continue
  }
  if (collisions.some((c) => c.startsWith(`${file} →`))) continue

  const from = path.join(folder, file)
  const to = path.join(folder, target)

  if (dryRun) {
    console.log(`  ${file}  →  ${target}`)
  } else {
    fs.renameSync(from, to)
    console.log(`  ✓ ${file}  →  ${target}`)
  }
  renamed++
}

console.log(
  `\n${dryRun ? '[dry-run] ' : ''}Listo: ${renamed} renombradas, ${skipped} ya estaban bien, ${collisions.length} con colisión.`,
)
