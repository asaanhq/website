import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import ViteFonts from 'vite-plugin-fonts'

export default defineConfig({
    plugins: [
        solidPlugin(),
        ViteFonts({
            google: {
                families: [
                    {
                        name: 'Open+Sans',
                        styles: 'wght@300;400;600;800',
                    },
                ],
            },
        }),
    ],
    build: {
        target: 'esnext',
        polyfillDynamicImport: false,
    },
})
