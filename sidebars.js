/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['intro', 'getting-started'],
    },
    {
      type: 'category',
      label: 'Models',
      items: [
        'models/rapid',
        //'models/cms-flux',
        //'models/ecco',
        //'models/issm',
        //'models/momo-chem',
      ],
    },
    {
      type: 'category',
      label: 'Metrics',
      items: [
        'metrics/citation-metrics',
        //'metrics/impact-metrics2',
        //'metrics/engagement-metrics',
      ],
    },
    {
      type: 'category',
      label: 'Visualizations',
      items: [
        'visualizations/charts',
        'visualizations/geographic-maps',
        'visualizations/interactive-elements',
      ],
    },
    {
      type: 'category',
      label: 'Methodology',
      items: [
        'methodology/data-collection',
        'methodology/score-calculation',
        'methodology/citation-analysis',
      ],
    },
  ],
};

module.exports = sidebars;