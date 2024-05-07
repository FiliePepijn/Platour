import { qrcode } from 'vite-plugin-qrcode';
import DynamicPublicDirectory from "vite-multiple-assets";


export default {
    
    root: 'src/',
    publicDir: '../static/',
    base: './',
    server:
    {
        host: true, 
    },
    assetsInclude: ['**/*.pcd'],
    plugins: [
        qrcode(), 
    ],
    build:
    {
        outDir: '../dist', 
        emptyOutDir: true,
        sourcemap: true,
        chunkSizeWarningLimit: 100000000,
        rollupOptions: {
            input: {
                main: './src/index.html',
                aboutme: './src/html/aboutme.html',
                projects: './src/html/projects.html',
                contact: './src/html/contact.html',
            }
        }
    },


}