import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    base: "/test-stencil-components-app/",
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    // optimizeDeps: {
    //     exclude: [
    //         '@zelenyjan/stencil-vue-sample-components/loader' //fix weird Vite error "outdated optimize dep"
    //     ],
    // },
})
