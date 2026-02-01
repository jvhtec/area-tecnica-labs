// Minimal Storage polyfill for Node/Vitest environments.
export function installMemoryStorage(target: any, key: string) {
  if (typeof target[key] !== 'undefined') return;

  let store: Record<string, string> = {};

  target[key] = {
    getItem: (k: string) => (k in store ? store[k] : null),
    setItem: (k: string, v: string) => {
      store[k] = String(v);
    },
    removeItem: (k: string) => {
      delete store[k];
    },
    clear: () => {
      store = {};
    },
    key: (i: number) => Object.keys(store)[i] ?? null,
    get length() {
      return Object.keys(store).length;
    },
  } as Storage;
}
