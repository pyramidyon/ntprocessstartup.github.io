import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://ntprocessstartup.github.io',
  base: '/',
  integrations: [starlight({
    title: 'NtProcessStartup',
    logo: 
    {
      src: './src/assets/ion-logo.svg'
    },
    social: {
      github: 'https://github.com/pyramidyon'
    },
    sidebar: [
    {
      label: '[home] Home',
      link: '/'
    }, 
    {
      label: '[list] Introduction',
      link: '/introduction/'
    }, 
    {
      label: '[box] Codes',
      autogenerate: { directory: 'codes' },
     },
        {
            label: '[rocket] Knowledgebase',
            autogenerate: { directory: 'knowledgebase' },
        }
  ],
    components: {
      ThemeProvider: './src/components/ThemeProvider.astro',
      ThemeSelect: './src/components/ThemeSelect.astro',
      SiteTitle: './src/components/SiteTitle.astro',
      Sidebar: './src/components/Sidebar.astro',
      Pagination: './src/components/Pagination.astro',
      Hero: './src/components/Hero.astro',
    },
    customCss: [
      '@fontsource-variable/space-grotesk/index.css',
      '@fontsource/space-mono/400.css',
      '@fontsource/space-mono/700.css',
      './src/styles/theme.css'
    ],
    expressiveCode: {
      themes: ['github-dark']
    },
    pagination: false,
    lastUpdated: true
  })],
  output: "static"
});