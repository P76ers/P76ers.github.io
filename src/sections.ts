import type { ComponentProps, ReactNode } from 'react';
import {
  IntellijIcon,
  EclipseIcon,
  VsCodeIcon,
  NodejsIcon,
  ReactIcon,
  AstroIcon,
  SvelteIcon,
  TailwindIcon,
  GitIcon,
  GithubIcon,
  DocusaurusIcon,
  PostgresIcon,
  MysqlIcon,
  InsomniaIcon,
  MarkdownIcon,
  MarkdownmdxIcon,
  HtmlIcon,
  CssIcon,
  JavascriptIcon,
  PhpIcon,
  PythonIcon,
  AutohotkeyIcon,
  CIcon,
  CsharpIcon,
  JavaIcon,
  SqlIcon,
  OperatingsystemIcon,
  WindowsIcon,
  AppleIcon,
  LinuxIcon,
  UnixIcon,
} from './icons';

/* PATH MenuVersioned */

export type Section = { docId: string } & (
  | {
      section: false;
    }
  | {
      section: string;
      icon?: (props: ComponentProps<'svg'>) => ReactNode;
      name: string;
    }
);

const SECTIONS: Section[] = [
  /* NOTE SingleMenu */
  {
    name: 'Visual Studio Code',
    docId: 'vsCode',
    icon: VsCodeIcon,
    section: 'ide',
  },
  {
    name: 'IntelliJ',
    docId: 'intelliJ',
    icon: IntellijIcon,
    section: 'ide',
  },
  {
    name: 'Eclipse',
    docId: 'eclipse',
    icon: EclipseIcon,
    section: 'ide',
  },
  {
    name: 'Node.Js',
    docId: 'nodeJs',
    icon: NodejsIcon,
    section: 'framework',
  },
  {
    name: 'React',
    docId: 'react',
    icon: ReactIcon,
    section: 'framework',
  },
  {
    name: 'Astro',
    docId: 'astro',
    icon: AstroIcon,
    section: 'framework',
  },
  {
    name: 'Svelte',
    docId: 'svelte',
    icon: SvelteIcon,
    section: 'framework',
  },
  {
    name: 'Tailwind',
    docId: 'tailwind',
    icon: TailwindIcon,
    section: 'framework',
  },
  {
    name: 'Git',
    docId: 'git',
    icon: GitIcon,
    section: 'versionControl',
  },
  {
    name: 'Github',
    docId: 'github',
    icon: GithubIcon,
    section: 'versionControl',
  },
  {
    name: 'Docusaurus',
    docId: 'docusaurus',
    icon: DocusaurusIcon,
    section: 'versionControl',
  },
  {
    name: 'PostgreSql',
    docId: 'postgreSql',
    icon: PostgresIcon,
    section: 'database',
  },
  {
    name: 'MySql',
    docId: 'mySql',
    icon: MysqlIcon,
    section: 'database',
  },
  {
    name: 'Insomnia',
    docId: 'insomnia',
    icon: InsomniaIcon,
    section: 'api',
  },
  {
    name: 'Markdown',
    docId: 'markdown',
    icon: MarkdownIcon,
    section: 'linguae',
  },
  {
    name: 'Mdx',
    docId: 'mdx',
    icon: MarkdownmdxIcon,
    section: 'linguae',
  },
  {
    name: 'Html',
    docId: 'html',
    icon: HtmlIcon,
    section: 'linguae',
  },
  {
    name: 'Css',
    docId: 'css',
    icon: CssIcon,
    section: 'linguae',
  },
  {
    name: 'Javascript',
    docId: 'javascript',
    icon: JavascriptIcon,
    section: 'linguae',
  },
  {
    name: 'PHP',
    docId: 'php',
    icon: PhpIcon,
    section: 'linguae',
  },
  {
    name: 'Python',
    docId: 'python',
    icon: PythonIcon,
    section: 'linguae',
  },
  {
    name: 'Autohotkey',
    docId: 'autohotkey',
    icon: AutohotkeyIcon,
    section: 'linguae',
  },
  {
    name: 'C',
    docId: 'c',
    icon: CIcon,
    section: 'linguae',
  },
  {
    name: 'C#',
    docId: 'cSharp',
    icon: CsharpIcon,
    section: 'linguae',
  },
  {
    name: 'Java',
    docId: 'java',
    icon: JavaIcon,
    section: 'linguae',
  },
  {
    name: 'SQL',
    docId: 'sql',
    icon: SqlIcon,
    section: 'linguae',
  },
  {
    name: 'Windows',
    docId: 'windows',
    icon: WindowsIcon,
    section: 'operatingSystem',
  },
  {
    name: 'MacOs',
    docId: 'macOs',
    icon: AppleIcon,
    section: 'operatingSystem',
  },
  {
    name: 'Linux',
    docId: 'linux',
    icon: LinuxIcon,
    section: 'operatingSystem',
  },
  {
    name: 'Unix',
    docId: 'unix',
    icon: UnixIcon,
    section: 'operatingSystem',
  },
];

export type SectionsGroup = {
  name: string;
  section: string;
  description?: string;
  className?: string;
};

const SECTION_GROUPS: SectionsGroup[][] = [
  /* NOTE MultiMenu */
  [
    {
      name: 'Database',
      section: 'database',
      // description: '',
    },
    {
      name: 'API',
      section: 'api',
      // description: '',
    },
  ],
];

export { SECTIONS, SECTION_GROUPS };
