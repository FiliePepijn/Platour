import { qrcode } from 'vite-plugin-qrcode';
import Sitemap from 'vite-plugin-sitemap'
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
        Sitemap(
            {
                hostname: 'https://platour.net',
            }
        ),
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
                mediaproducts: './src/html/mediaproducts.html',
                designproducts: './src/html/design.html',
                standard: './src/html/standard.html',
            }
        }
    },


}