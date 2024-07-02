import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://ntprocessstartup.github.io',
  base: '/',
  integrations: [starlight({
    title: 'NtProcessStartu',
    editLink: {
      baseUrl: 'https://github.com/pyramidyon/ntprocessstartup.github.io/edit/main/docs/',
    },
    logo: {
      src: './src/assets/ion-logo.svg'
    },
    social: {
      github: 'https://github.com/pyramidyon'
    },
    sidebar: [{
      label: '[home] Home',
      link: '/'
    }, 
    {
      label: 'Introduction',
      link: '/introduction/'
    }, 
    {
      label: 'Knowledgebase',
      link: '/features/'
    }, 
    {
      label: '[rocket] Setup',
      autogenerate: {
        directory: 'setup'
      }
    }, 
    {
      label: '[box] Guides',
      autogenerate: {
        directory: 'guides'
      }
    }, 
    {
      label: '[list] Features',
      autogenerate: {
        directory: 'guides'
      }
    }, 
    {
      label: '[book] Examples',
      autogenerate: {
        directory: 'examples'
      }
    }],
    components: {
      ThemeProvider: './src/components/ThemeProvider.astro',
      ThemeSelect: './src/components/ThemeSelect.astro',
      SiteTitle: './src/components/SiteTitle.astro',
      Sidebar: './src/components/Sidebar.astro',
      Pagination: './src/components/Pagination.astro',
      Hero: './src/components/Hero.astro',
      PostComments: './src/components/PostComments.astro',
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