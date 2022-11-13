// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { npm2yarn2pnpm } = require('@sapphire/docusaurus-plugin-npm2yarn2pnpm');
const { ts2esm2cjs } = require('@sapphire/docusaurus-plugin-ts2esm2cjs');

const path = require('path');
const { readdirSync } = require('fs');

const PACKAGES_DIR = path.join(__dirname, '../../packages');

const GITHUB_REPO = `https://github.com/Artrix9095/Slythe.js`;

const packages = readdirSync(PACKAGES_DIR);

const NO_DOC = ['cli']; // packages that shouldn't have documentation from typedoc

const entryPoints = packages
  .filter(n => !NO_DOC.includes(n))
  .map(name => path.join(PACKAGES_DIR, name));

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    [
      'docusaurus-plugin-typedoc',

      // Plugin / TypeDoc options
      /**  @type {import('typedoc').TypeDocOptions} */

      {
        entryPointStrategy: 'packages',
        excludeExternals: true,
        excludeProtected: true,
        excludeInternal: true,
        excludePrivate: true,
        entryPoints,
      },
    ],
  ],
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: `${GITHUB_REPO}/tree/main/apps/docs/docs/`,

          remarkPlugins: [npm2yarn2pnpm, ts2esm2cjs],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Slythe.js',
        logo: {
          alt: 'My Site Logo',
          src: 'assets/logo2.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: GITHUB_REPO,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: GITHUB_REPO,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Slythe.js, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
