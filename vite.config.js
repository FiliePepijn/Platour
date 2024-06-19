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
        rollupOptions: {
            input: {
                main: './src/index.html',
                aboutme: './src/html/aboutme.html',
                projects: './src/html/projects.html',
                contact: './src/html/contact.html',
                mediaproducts: './src/html/mediaproducts.html',
                designproducts: './src/html/design.html',
                standard: './src/html/standard.html',
                personal: './src/html/personal.html',
                development: './src/html/development.html',

                BB_feedback: './src/documents/BB-feedback-ppt.pdf',
                BB_final_logos: './src/documents/BB-Final-Logos.pdf',
                BB_ppt: './src/documents/BB-ppt.pdf',
                BB_research: './src/documents/BB-research.pdf',

                fontys_ovp_1: './src/documents/fontys-ovp-1.pdf',
                fontys_ovp_2: './src/documents/fontys-ovp-2.pdf',
                fontys_ovp_answers: './src/documents/fontys-ovp-answers.pdf',
                fontys_ovp_antwoorden: './src/documents/fontys-ovp-antwoorden.pdf',
                fontys_ovp_final: './src/documents/fontys-ovp-final.pdf',
                fontys_ovp_interview: './src/documents/fontys-ovp-interview.m4a',
                fontys_ovp_phone: './src/documents/fontys-ovp-phone.pdf',
                fontys_ovp_research: './src/documents/fontys-ovp-research.pdf',
                fontys_ovp_survey: './src/documents/fontys-ovp-survey.pdf',

                portfolio_design1: './src/documents/portfolioDesign1.pdf',
                portfolio_design2: './src/documents/portfolioDesign2.pdf',
                portfolio_feedback: './src/documents/portfolioFeedback.pdf',
                portfolio_inspiration: './src/documents/portfolioInspiration.pdf',

                sprint_x_design: './src/documents/sprint-x-design.pdf',
                sprint_x_interview: './src/documents/sprint-X-interview.m4a',
                sprint_x_planning: './src/documents/sprint-x-planning.pdf',
                sprint_x_xdfile: './src/documents/sprint-x-xdfile.xd',
                sprint_x_reserach: './src/documents/sprint-x-research.pdf',





            }
        }
    },


}