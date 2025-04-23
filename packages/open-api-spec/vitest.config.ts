/// <reference types='vitest' />
import { defineConfig } from 'vite';


export default defineConfig(() => ({
    root: __dirname,
    cacheDir: '../../node_modules/.vite/packages/open-api-spec',
    test: {
        watch: false,
        globals: true,
        environment: 'node',
        include: ['{src,tests}/**/*.{test,spec}.{ts,mts,cts}'],
        reporters: ['default'],
        coverage: {
            reportsDirectory: '../../coverage/open-api-spec',
            provider: 'v8' as const,
        }
    },
}));
