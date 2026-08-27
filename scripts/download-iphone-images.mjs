#!/usr/bin/env node
// Скачивает изображения iPhone из AppleDB CDN в public/images/iphones/.
// Запуск из корня проекта: node scripts/download-iphone-images.mjs
// После этого переключите getIPhoneImageUrl в src/lib/iphone-images.ts
// на локальные файлы: return `/images/iphones/${slug}.png`;

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const libPath = join(root, 'src', 'lib', 'iphone-images.ts');
const outDir = join(root, 'public', 'images', 'iphones');

const source = await readFile(libPath, 'utf8');
const entries = [...source.matchAll(/'(iphone-[^']+)':\s*'([^']+)'/g)];

if (entries.length === 0) {
  console.error('Не найдено ни одной модели в', libPath);
  process.exit(1);
}

await mkdir(outDir, { recursive: true });
console.log(`Найдено моделей: ${entries.length}. Скачиваю в ${outDir} ...`);

let ok = 0;
for (const [, slug, url] of entries) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(join(outDir, `${slug}.png`), buf);
    console.log(`OK  ${slug} (${Math.round(buf.length / 1024)} KB)`);
    ok++;
  } catch (err) {
    console.error(`ERR ${slug}: ${err.message}`);
  }
}
console.log(`Готово: ${ok}/${entries.length}.`);
