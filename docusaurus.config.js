// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const math = require('remark-math');
const katex = require('rehype-katex');

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import {tailwind} from 'tailwindcss/defaultTheme';
import {tailwindcss} from 'tailwindcss/defaultTheme';



/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Scientific Models Citation Dashboard',
  tagline: 'Track the impact and reach of scientific models through citation metrics',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://scientific-models-dashboard.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'scientific-models', // Usually your GitHub org/user name.
  projectName: 'citation-dashboard', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/scientific-models/citation-dashboard/tree/main/',
          remarkPlugins: [math, [require('mdx-mermaid'), {}]],
          rehypePlugins: [katex],
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/scientific-models/citation-dashboard/tree/main/',
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
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    async function tailwindPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
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
      // Replace with your project's social card
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
          {to: '/dashboard', label: 'Dashboard', position: 'left'},
          {to: '/models', label: 'Models', position: 'left'},
          {to: '/citations', label: 'Citation Analysis', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
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
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'Models',
                to: '/models',
              },
              {
                label: 'Metrics',
                to: '/metrics',
              },
              {
                label: 'Methodology',
                to: '/docs/methodology/data-collection',
              },
            ],
          },
          {
            title: 'Models',
            items: [
              {
                label: 'RAPID',
                to: '/models/rapid',
              },
              {
                label: 'CMS-Flux',
                to: '/models/cms-flux',
              },
              {
                label: 'ECCO',
                to: '/models/ecco',
              },
              {
                label: 'ISSM',
                to: '/models/issm',
              },
              {
                label: 'MOMO-CHEM',
                to: '/models/momo-chem',
              },
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
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Contact Us',
                to: '/contact',
              },
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
        theme: {light: 'neutral', dark: 'forest'},
      },
    }),
};

module.exports = config;