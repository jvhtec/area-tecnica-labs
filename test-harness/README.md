# Test Harness

This folder is where we prototype a **repeatable** Vitest harness for the main repo.

Target pain:
- import-time crashes (env/localStorage)
- JSdom quirks (CSS injection, missing head)
- consistent mocks

Upstream plan:
- move the stable parts into `area-tecnica/src/test/setup.ts` and `vitest.config.ts`
