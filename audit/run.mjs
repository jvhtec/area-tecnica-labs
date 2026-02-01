import { execSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';

mkdirSync(new URL('./out/', import.meta.url), { recursive: true });

console.log('==> vitest-health');
execSync('node audit/vitest-health.mjs', { stdio: 'inherit' });
