// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const math = require('remark-math');
const katex = require('rehype-katex');

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Scientific Models Citation Dashboard',
  tagline: 'Track the impact and reach of scientific models through citation metrics',
  favicon: 'img/favicon.ico',

  url: 'https://scientific-models-dashboard.org',
  baseUrl: '/',

  organizationName: 'scientific-models',
  projectName: 'citation-dashboard',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/scientific-models/citation-dashboard/tree/main/',
          remarkPlugins: [remarkMath, require('mdx-mermaid')],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/scientific-models/citation-dashboard/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  markdown: {
    mermaid: true,
  },

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
    async function tailwindPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'models',
        path: 'docs/models',
        routeBasePath: 'models',
        sidebarPath: require.resolve('./sidebars-models.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'metrics',
        path: 'docs/metrics',
        routeBasePath: 'metrics',
        sidebarPath: require.resolve('./sidebars-metrics.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      navbar: {
        title: 'Scientific Models Dashboard',
        logo: {
          alt: 'Scientific Models Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/dashboard', label: 'Dashboard', position: 'left' },
          { to: '/models', label: 'Models', position: 'left' },
          { to: '/citations', label: 'Citation Analysis', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/scientific-models/citation-dashboard',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { label: 'Getting Started', to: '/docs/intro' },
              { label: 'Models', to: '/models' },
              { label: 'Metrics', to: '/metrics' },
              { label: 'Methodology', to: '/docs/methodology/data-collection' },
            ],
          },
          {
            title: 'Models',
            items: [
              { label: 'RAPID', to: '/models/rapid' },
              { label: 'CMS-Flux', to: '/models/cms-flux' },
              { label: 'ECCO', to: '/models/ecco' },
              { label: 'ISSM', to: '/models/issm' },
              { label: 'MOMO-CHEM', to: '/models/momo-chem' },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/scientific-models/citation-dashboard',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/scientific_models',
              },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Blog', to: '/blog' },
              { label: 'Contact Us', to: '/contact' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Scientific Models Citation Dashboard. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      mermaid: {
        theme: { light: 'neutral', dark: 'forest' },
      },
    }),
};

module.exports = config;
