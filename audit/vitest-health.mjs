import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const areaTecnicaPath = resolve(process.cwd(), '../area-tecnica');

let out = '';
try {
  out = execSync('npm test -- --run', {
    cwd: areaTecnicaPath,
    env: { ...process.env, NODE_ENV: 'test', VITEST: '1' },
    stdio: 'pipe'
  }).toString();
} catch (e) {
  const stdout = e?.stdout?.toString?.() ?? '';
  const stderr = e?.stderr?.toString?.() ?? '';
  out = stdout + '\n' + stderr;
}

const lines = out.split(/\r?\n/);
const tail = lines.slice(Math.max(0, lines.length - 1200)).join('\n');
writeFileSync(new URL('./out/vitest-health.log', import.meta.url), tail);

if (/Test Files\s+\d+ failed/.test(out)) process.exit(1);
