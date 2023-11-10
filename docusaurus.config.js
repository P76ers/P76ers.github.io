const math = require('remark-math');
const katex = require('rehype-katex');

const code_themes = {
  light: require('prism-react-renderer/themes/github'),
  dark: require('prism-react-renderer/themes/vsDark'),
};

/** @type {import('@docusaurus/types').Config} */
const meta = {
  title: 'codingDocs',
  tagline: 'Software Development Documentation',
  url: 'https://p76ers.github.io',
  baseUrl: '/',
  organizationName: 'P76ers', // Usually your GitHub org/user name.
  projectName: 'P76ers.github.io', // Usually your repo name.
  deploymentBranch: 'deployment',
  favicon: '/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
};

/** @type {import('@docusaurus/plugin-content-docs').Options[]} */
const docs = [
  /* NOTE Docs */
  {
    id: 'ide',
    path: 'docs/ide',
    routeBasePath: '/ide',
  },
  {
    id: 'vsCode',
    path: 'docs/vsCode',
    routeBasePath: '/vsCode',
    // versions: {
    //   current: {
    //     label: '1.x.x',
    //   },
    // },
  },
  {
    id: 'intelliJ',
    path: 'docs/intelliJ',
    routeBasePath: '/intelliJ',
    // versions: {
    //   current: {
    //     label: '1.x.x',
    //   },
    // },
  },
  {
    id: 'nodeJs',
    path: 'docs/nodeJs',
    routeBasePath: '/nodeJs',
    // versions: {
    //   current: {
    //     label: '1.x.x',
    //   },
    // },
  },
  {
    id: 'react',
    path: 'docs/react',
    routeBasePath: '/react',
    // versions: {
    //   current: {
    //     label: '1.x.x',
    //   },
    // },
  },
  {
    id: 'astro',
    path: 'docs/astro',
    routeBasePath: '/astro',
    // versions: {
    //   current: {
    //     label: '1.x.x',
    //   },
    // },
  },
  {
    id: 'svelte',
    path: 'docs/svelte',
    routeBasePath: '/svelte',
    // versions: {
    //   current: {
    //     label: '1.x.x',
    //   },
    // },
  },
  {
    id: 'tailwind',
    path: 'docs/tailwind',
    routeBasePath: '/tailwind',
    // versions: {
    //   current: {
    //     label: '1.x.x',
    //   },
    // },
  },
  {
    id: 'eclipse',
    path: 'docs/eclipse',
    routeBasePath: '/eclipse',
    // versions: {
    //   current: {
    //     label: '1.x.x',
    //   },
    // },
  },
  {
    id: 'framework',
    path: 'docs/framework',
    routeBasePath: '/framework',
  },
  {
    id: 'versionControl',
    path: 'docs/versionControl',
    routeBasePath: '/versionControl',
    // versions: {
    //   current: {
    //     label: '1.x.x',
    //   },
    // },
  },
  {
    id: 'git',
    path: 'docs/git',
    routeBasePath: '/git',
    // versions: {
    //   current: {
    //     label: '1.x.x',
    //   },
    // },
  },
  {
    id: 'github',
    path: 'docs/github',
    routeBasePath: '/github',
    // versions: {
    //   current: {
    //     label: '1.x.x',
    //   },
    // },
  },
  {
    id: 'docusaurus',
    path: 'docs/docusaurus',
    routeBasePath: '/docusaurus',
    // versions: {
    //   current: {
    //     label: '1.x.x',
    //   },
    // },
  },
  {
    id: 'database',
    path: 'docs/database',
    routeBasePath: '/database',
  },
  {
    id: 'postgreSql',
    path: 'docs/postgreSql',
    routeBasePath: '/postgreSql',
  },
  {
    id: 'mySql',
    path: 'docs/mySql',
    routeBasePath: '/mySql',
  },
  {
    id: 'insomnia',
    path: 'docs/insomnia',
    routeBasePath: '/insomnia',
  },
  {
    id: 'linguae',
    path: 'docs/linguae',
    routeBasePath: '/linguae',
  },
  {
    id: 'markdown',
    path: 'docs/markdown',
    routeBasePath: '/markdown',
  },
  {
    id: 'mdx',
    path: 'docs/mdx',
    routeBasePath: '/mdx',
  },
  {
    id: 'html',
    path: 'docs/html',
    routeBasePath: '/html',
  },
  {
    id: 'css',
    path: 'docs/css',
    routeBasePath: '/css',
  },
  {
    id: 'javascript',
    path: 'docs/javascript',
    routeBasePath: '/javascript',
  },
  {
    id: 'php',
    path: 'docs/php',
    routeBasePath: '/php',
  },
  {
    id: 'python',
    path: 'docs/python',
    routeBasePath: '/python',
  },
  {
    id: 'autohotkey',
    path: 'docs/autohotkey',
    routeBasePath: '/autohotkey',
  },
  {
    id: 'c',
    path: 'docs/c',
    routeBasePath: '/c',
  },
  {
    id: 'cpp',
    path: 'docs/cpp',
    routeBasePath: '/cpp',
  },
  {
    id: 'cSharp',
    path: 'docs/cSharp',
    routeBasePath: '/cSharp',
  },
  {
    id: 'java',
    path: 'docs/java',
    routeBasePath: '/java',
  },
  {
    id: 'sql',
    path: 'docs/sql',
    routeBasePath: '/sql',
  },
  {
    id: 'operatingSystem',
    path: 'docs/operatingSystem',
    routeBasePath: '/operatingSystem',
  },
  {
    id: 'windows',
    path: 'docs/windows',
    routeBasePath: '/windows',
  },
  {
    id: 'macOs',
    path: 'docs/macOs',
    routeBasePath: '/macOs',
  },
  {
    id: 'linux',
    path: 'docs/linux',
    routeBasePath: '/linux',
  },
  {
    id: 'unix',
    path: 'docs/unix',
    routeBasePath: '/unix',
  },
];

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: false,
  editUrl: 'https://p76ers.github.io',
  showLastUpdateTime: true,
  remarkPlugins: [
    math,
    [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
  ],
  rehypePlugins: [katex],
  sidebarPath: require.resolve('./sidebars-default.js'),
};

/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function create_doc_plugin({
  sidebarPath = require.resolve('./sidebars-default.js'),
  ...options
}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      ...defaultSettings,
      sidebarPath,
      ...options,
    }),
  ];
}

const isDev = process.env.NODE_ENV === 'development';

const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

const plugins = [tailwindPlugin, ...docs_plugins, webpackPlugin];

const fs = require('fs');
const developmentHTML = fs.readFileSync(
  './src/snippets/development.html',
  'utf-8'
);
const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...meta,
  plugins,

  trailingSlash: false,
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],
  clientModules: [require.resolve('./src/client/define-ui-kit.js')],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/guides',
          id: 'guides',
          routeBasePath: '/guides',
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api-reference.css'),
          ],
        },
        sitemap: {
          ignorePatterns: ['/tags/**'],
        },
        googleTagManager: {
          containerId: 'GTM-5FDFFSS',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/logo/logo.png',
      colorMode: {
        defaultMode: 'dark',
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6,
      },
      navbar: {
        /* NOTE Logo */
        logo: {
          href: '/',
          src: '/logo/light.svg',
          srcDark: '/logo/dark.svg',
          alt: 'CodingDocs',
          height: '40px',
          width: '101px',
        },
        items: [
          /* PATH Menu */
          {
            label: 'Development',
            type: 'dropdown',
            className: 'dyte-dropdown',
            items: [
              {
                type: 'html',
                value: developmentHTML,
                className: 'dyte-dropdown',
              },
            ],
          },
        ],
      },
      /* PATH Footer2Links */
      footer: {
        logo: {
          href: '/',
          src: '/logo/light.svg',
          srcDark: '/logo/dark.svg',
          alt: 'CodingDocs',
          height: '36px',
        },
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'Demo',
                href: '/',
              },
              {
                label: 'Developer Portal',
                href: '/',
              },
              {
                label: 'Pricing',
                href: '/',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'About Us',
                href: '/',
              },
              {
                label: 'Join Us',
                href: '/',
              },
              {
                label: 'Privacy Policy',
                href: '/',
              },
              {
                label: 'Contact Us',
                href: '/',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Documentation',
                href: '/',
              },
              {
                label: 'Blog',
                href: '/',
              },
              {
                label: 'Community',
                href: '/',
              },
            ],
          },
        ],
        copyright: 'Copyright © CodingDocs since 2023. All rights reserved.',
      },
      prism: {
        theme: code_themes.light,
        darkTheme: code_themes.dark,
        additionalLanguages: [
          'dart',
          'ruby',
          'groovy',
          'kotlin',
          'java',
          'swift',
          'objectivec',
          'autohotkey',
          'csharp',
          'sql',
          'php',
          'python',
          'c',
          'cpp',
        ],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-next-line-error',
          },
        ],
      },
      algolia: {
        appId: '5VQRF33AHI',
        apiKey: 'd4543fa471058861e91b040842e5fbe1',
        indexName: 'codingDocs',
        contextualSearch: true,
        searchParameters: {},
      },
    }),

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
};

module.exports = config;
