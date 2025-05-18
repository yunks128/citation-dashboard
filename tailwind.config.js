// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
    tailwind: {
      content: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.{md,mdx}"],
      theme: {
        extend: {
          colors: {
            primary: {
              light: '#42a5f5',
              DEFAULT: '#1976d2',
              dark: '#0d47a1',
            },
            secondary: {
              light: '#66bb6a',
              DEFAULT: '#388e3c',
              dark: '#1b5e20',
            },
            tertiary: {
              light: '#9575cd',
              DEFAULT: '#7c3aed',
              dark: '#512da8',
            },
            accent: {
              light: '#26c6da',
              DEFAULT: '#0097a7',
              dark: '#006064',
            },
            warning: {
              light: '#ffb74d',
              DEFAULT: '#f57c00',
              dark: '#e65100',
            },
            success: {
              light: '#81c784',
              DEFAULT: '#2e7d32',
              dark: '#1b5e20',
            },
            danger: {
              light: '#e57373',
              DEFAULT: '#d32f2f',
              dark: '#b71c1c',
            },
            // Model-specific colors
            rapid: '#1976d2',      // Blue
            cmsFlux: '#16a34a',    // Green
            ecco: '#0ea5e9',       // Sky
            issm: '#8b5cf6',       // Violet
            momoChem: '#f43f5e',   // Rose
          },
          fontFamily: {
            sans: [
              '-apple-system',
              'BlinkMacSystemFont',
              'Segoe UI',
              'Roboto',
              'Oxygen',
              'Ubuntu',
              'Cantarell',
              'Open Sans',
              'Helvetica Neue',
              'sans-serif',
            ],
            mono: [
              'SFMono-Regular',
              'Menlo',
              'Monaco',
              'Consolas',
              'Liberation Mono',
              'Courier New',
              'monospace',
            ],
          },
          boxShadow: {
            card: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          },
          gridTemplateColumns: {
            'dashboard': 'repeat(auto-fit, minmax(300px, 1fr))',
          },
        },
      },
      plugins: [],
    }
  };