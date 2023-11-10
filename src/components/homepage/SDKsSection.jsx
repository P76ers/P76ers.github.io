import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import {
  SwiftIcon,
  //
  IdeIcon,
  IntellijIcon,
  EclipseIcon,
  VsCodeIcon,
  FrameworksIcon,
  NodejsIcon,
  ReactIcon,
  AstroIcon,
  SvelteIcon,
  TailwindIcon,
  VersionControlIcon,
  GitIcon,
  GithubIcon,
  GithubDesktopIcon,
  DocusaurusIcon,
  DatabaseIcon,
  PostgresIcon,
  MysqlIcon,
  InsomniaIcon,
  LinguaeIcon,
  MarkdownIcon,
  MarkdownmdxIcon,
  HtmlIcon,
  CssIcon,
  JavascriptIcon,
  PhpIcon,
  PythonIcon,
  AutohotkeyIcon,
  CIcon,
  cppIcon,
  CsharpIcon,
  JavaIcon,
  SqlIcon,
  OperatingsystemIcon,
  WindowsIcon,
  AppleIcon,
  LinuxIcon,
  UnixIcon,
  HardwareIcon,
} from '../../icons';
import Head from '@docusaurus/Head';
import { useState } from 'react';

function SDKLink({ href, Icon, label, disabled = false }) {
  return (
    <Link
      className={clsx(
        'flex items-center gap-2 rounded-md p-2 text-current transition hover:bg-secondary-700 hover:text-black hover:no-underline dark:hover:text-white',
        disabled && 'cursor-default'
      )}
      href={!disabled ? href : undefined}
    >
      <Icon className="h-8 w-8" />
      {label}
    </Link>
  );
}

export default function SDKsSection() {
  const [visibleSection, setVisibleSection] = useState('Web');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const section = entry.target.getAttribute('data-section');

          if (entry.isIntersecting) {
            entry.target.classList.add('intersected');
            setVisibleSection(section);
          }
        }
      },
      { rootMargin: '-50% 0% -50% 0%' }
    );

    const elements = document.querySelectorAll('.sdk-section');
    for (const el of elements) {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  function Pill({ section }) {
    return (
      <div
        className={clsx(
          'flex-1 cursor-pointer rounded-md py-2 px-6 text-center font-jakarta text-sm font-semibold',
          visibleSection === section
            ? 'bg-primary text-white'
            : 'text-black dark:text-white'
        )}
        onClick={() => {
          document
            .getElementById(section)
            ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }}
      >
        {`${section[0].toUpperCase()}${section.substring(1)}`}
      </div>
    );
  }

  return (
    <section className="bg-secondary-1000 py-20 px-4" id="start-building">
      <Head>
        <link rel="prefetch" href="/logo.png" />
      </Head>
      <div className="mx-auto max-w-7xl">
        <div className="dyte-badge">Development Hub</div>

        <div className="sticky top-14 z-20 -mt-4 flex flex-col items-center gap-6 bg-secondary-1000 py-6 lg:flex-row lg:justify-between lg:py-0">
          <h2 className="my-0 text-center font-jakarta lg:text-3xl">
            codingDocs
          </h2>

          <div className="mx-auto flex h-20 w-full flex-1 items-center justify-center self-start lg:w-auto lg:justify-end">
            <div className="inline-flex items-center rounded-lg bg-zinc-100 p-2 text-sm dark:bg-zinc-800 lg:text-base">
              <Pill section="web" />
              <Pill section="mobile" />
              <Pill section="plugin" />
            </div>
          </div>
        </div>

        <div
          className="sdk-section my-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="web"
          id="web"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">Web</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Web Hub
            </p>
            <Link className="text-sm" href="/">
              Learn More &rarr;
            </Link>
          </div>
          <div className="flex-1 bg-secondary-800 p-6 px-8 lg:rounded-l-3xl">
            <h4>Heading</h4>
            <p className="text-sm leading-relaxed text-text-400">left</p>
            <div>
              <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
                <li>
                  <SDKLink
                    href="https://github.com/settings/profile"
                    Icon={GithubIcon}
                    label="Github"
                  />
                </li>
                <li>
                  <SDKLink
                    href="/"
                    Icon={GithubDesktopIcon}
                    label="githubDesktop"
                  />
                </li>
                <li>
                  <SDKLink href="/" Icon={IdeIcon} label="Ide" />
                </li>
                <li>
                  <SDKLink href="/" Icon={IntellijIcon} label="IntelliJ" />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 bg-secondary-900 p-6 px-8 lg:rounded-bl-none">
            <h4>Heading</h4>
            <p className="text-sm leading-relaxed text-text-400">Mid</p>
            <div>
              <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
                <li>
                  <SDKLink href="/" Icon={EclipseIcon} label="Eclipse" />
                </li>
                <li>
                  <SDKLink href="/" Icon={VsCodeIcon} label="VsCode" />
                </li>
                <li>
                  <SDKLink href="/" Icon={FrameworksIcon} label="Frameworks" />
                </li>
                <li>
                  <SDKLink href="/" Icon={NodejsIcon} label="Nodejs" />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 rounded-b-3xl bg-secondary-800 p-6 px-8 lg:rounded-r-3xl lg:rounded-bl-none">
            <h4>Heading</h4>
            <p className="text-sm leading-relaxed text-text-400">right</p>
            <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink href="/" Icon={ReactIcon} label="React" />
              </li>
              <li>
                <SDKLink href="/" Icon={AstroIcon} label="Astro" />
              </li>
              <li>
                <SDKLink href="/" Icon={SvelteIcon} label="Svelte" />
              </li>
              <li>
                <SDKLink href="/" Icon={TailwindIcon} label="Tailwind" />
              </li>
            </ul>
          </div>
        </div>

        <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="mobile"
          id="mobile"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">Mobile</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              eius doloribus consectetur rem, at ipsum velit, veritatis
              inventore quam quidem cumque dicta temporibus placeat architecto
              non pariatur iure. Libero atque aspernatur rem, cupiditate
              assumenda a perferendis consectetur blanditiis ducimus maxime
              labore mollitia officiis rerum error quos magnam aperiam incidunt
              quibusdam!
            </p>
            <Link className="text-sm" href="/">
              Learn More &rarr;
            </Link>
          </div>
          <div className="flex flex-1 flex-col bg-secondary-800 p-6 px-8 lg:rounded-l-3xl">
            <h4>Heading</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Left Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, enim?
            </p>
            <ul className="flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink
                  href="/"
                  Icon={VersionControlIcon}
                  label="VersionControl"
                />
              </li>
              <li>
                <SDKLink href="/" Icon={GitIcon} label="Git" />
              </li>
              <li>
                <SDKLink href="/" Icon={DocusaurusIcon} label="Docusaurus" />
              </li>
              <li>
                <SDKLink href="/" Icon={DatabaseIcon} label="Database" />
              </li>
            </ul>
            {/* <div className="flex flex-1 flex-col justify-end">
              <div className="rounded-2xl bg-secondary-700 p-4 dark:bg-secondary-900">
                <h5 className="text-center text-xs text-text-400">
                  COMING SOON
                </h5>
                <ul className="mb-0 flex list-none flex-col gap-2 pl-0"></ul>
              </div>
            </div> */}
          </div>
          <div className="flex-1 rounded-b-3xl bg-secondary-800 p-6 px-8 lg:rounded-r-3xl lg:rounded-bl-none">
            <h4>Heading</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Right Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit, maxime?
            </p>
            <ul className="flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink href="/" Icon={PostgresIcon} label="Postgres" />
              </li>
              <li>
                <SDKLink Icon={MysqlIcon} label="MySQL" href="/" />
              </li>
              <li>
                <SDKLink href="/" Icon={InsomniaIcon} label="Insomnia" />
              </li>
            </ul>
          </div>
        </div>

        <div
          className="sdk-section my-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="plugin"
          id="plugin"
        >
          {/* <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">Web</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Link Hub
            </p>
            <Link className="text-sm">Learn More &rarr;</Link>
          </div> */}
          <div className="flex-1 bg-secondary-800 p-6 px-8 lg:rounded-l-3xl">
            <h4>HeadingMobile</h4>
            <p className="text-sm leading-relaxed text-text-400">left</p>
            <div>
              <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
                <li>
                  <SDKLink href="/" Icon={LinguaeIcon} label="Linguae" />
                </li>
                <li>
                  <SDKLink href="/" Icon={MarkdownIcon} label="Markdown" />
                </li>
                <li>
                  <SDKLink href="/" Icon={MarkdownmdxIcon} label="MDX" />
                </li>
                <li>
                  <SDKLink href="/" Icon={HtmlIcon} label="html" />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 bg-secondary-900 p-6 px-8 lg:rounded-bl-none">
            <h4>HeadingMobile</h4>
            <p className="text-sm leading-relaxed text-text-400">mid</p>
            <div>
              <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
                <li>
                  <SDKLink href="/" Icon={CssIcon} label="Css" />
                </li>
                <li>
                  <SDKLink href="/" Icon={JavascriptIcon} label="Javascript" />
                </li>
                <li>
                  <SDKLink href="/" Icon={PhpIcon} label="Php" />
                </li>
                <li>
                  <SDKLink href="/" Icon={PythonIcon} label="Python" />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 rounded-b-3xl bg-secondary-800 p-6 px-8 lg:rounded-r-3xl lg:rounded-bl-none">
            <h4>HeadingMobile</h4>
            <p className="text-sm leading-relaxed text-text-400">right</p>
            <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink href="/" Icon={AutohotkeyIcon} label="Autohotkey" />
              </li>
              <li>
                <SDKLink href="/" Icon={CIcon} label="C" />
              </li>
              <li>
                <SDKLink href="/" Icon={CsharpIcon} label="C#" />
              </li>
              <li>
                <SDKLink href="/" Icon={JavaIcon} label="Java" />
              </li>
              <li>
                <SDKLink href="/" Icon={SqlIcon} label="SQL" />
              </li>
              <li>
                <SDKLink
                  href="/"
                  Icon={OperatingsystemIcon}
                  label="Operatingsystem"
                />
              </li>
              <li>
                <SDKLink href="/" Icon={WindowsIcon} label="Windows" />
              </li>
              <li>
                <SDKLink href="/" Icon={AppleIcon} label="MacOs" />
              </li>
              <li>
                <SDKLink href="/" Icon={LinuxIcon} label="Linux" />
              </li>
              <li>
                <SDKLink href="/" Icon={UnixIcon} label="Unix" />
              </li>
              <li>
                <SDKLink href="/" Icon={HardwareIcon} label="Hardware" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-text-400">
        <p>
          Need support? <Link href="/">Contact Us</Link>
        </p>
      </div>
    </section>
  );
}
