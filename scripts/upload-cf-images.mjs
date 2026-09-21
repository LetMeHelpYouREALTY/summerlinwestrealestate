import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function readEnv(file) {
  const out = {};
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (!m) continue;
    out[m[1]] = m[2].replace(/^"|"$/g, '');
  }
  return out;
}

const env = readEnv(path.join(root, '.env.cf.tmp'));
const token = env.CLOUDFLARE_API_TOKEN;
if (!token) {
  console.error('NO_TOKEN');
  process.exit(1);
}

async function cf(url, init = {}) {
  const res = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(init.headers || {}),
    },
  });
  const json = await res.json();
  if (!json.success) {
    const msg = json.errors?.map((e) => e.message).join('; ') || res.statusText;
    throw new Error(msg);
  }
  return json;
}

const accounts = await cf('https://api.cloudflare.com/client/v4/accounts?per_page=20');
const accountId = accounts.result?.[0]?.id;
if (!accountId) throw new Error('NO_ACCOUNT');
console.log('account_ok');

const uploads = [
  ['swre-hero-h1', 'public/images/hero-h1-summerlin-west.png'],
  ['swre-og', 'public/images/og-image.png'],
  ['swre-our-services', 'public/images/h2-our-services.png'],
  ['swre-the-vistas', 'public/images/communities/the-vistas.png'],
  ['swre-the-paseos', 'public/images/communities/the-paseos.png'],
  ['swre-stonebridge', 'public/images/communities/stonebridge.png'],
  ['swre-redpoint', 'public/images/communities/redpoint.png'],
  ['swre-redpoint-square', 'public/images/communities/redpoint-square.png'],
  ['swre-reverence', 'public/images/communities/reverence.png'],
  ['swre-red-rock-cc', 'public/images/communities/red-rock-country-club.png'],
  ['swre-the-ridges', 'public/images/communities/the-ridges.png'],
  ['swre-downtown-summerlin', 'public/images/communities/downtown-summerlin.png'],
  ['swre-downtown-shopping', 'public/images/downtown/shopping.png'],
  ['swre-downtown-dining', 'public/images/downtown/dining.png'],
  ['swre-downtown-entertainment', 'public/images/downtown/entertainment.png'],
];

let hash = '';
for (const [id, file] of uploads) {
  const buf = fs.readFileSync(path.join(root, file));
  const form = new FormData();
  form.append('id', id);
  form.append('file', new Blob([buf], { type: 'image/png' }), path.basename(file));
  try {
    const json = await cf(`https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1`, {
      method: 'POST',
      body: form,
    });
    const variant = json.result?.variants?.[0] || '';
    const match = variant.match(/imagedelivery\.net\/([^/]+)\//);
    if (match) hash = match[1];
    console.log(`uploaded ${id}`);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    if (message.toLowerCase().includes('already exist') || message.includes('Duplicate')) {
      console.log(`exists ${id}`);
    } else {
      console.log(`fail ${id}: ${message}`);
    }
  }
}
if (hash) console.log(`hash ${hash}`);
