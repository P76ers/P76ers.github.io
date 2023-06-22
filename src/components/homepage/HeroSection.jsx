import React from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import ThemedImage from '@theme/ThemedImage';


export default function HeroSection() {
  return (
    <section className="noise-bg no-underline-links px-4 pt-16 lg:py-0">
      <Head>
        <link rel="prefetch" href="/index/develop.jpg" />
        <link rel="prefetch" href="/index/develop.jpg" />
      </Head>
      <div className="mx-auto flex max-w-7xl flex-col items-center lg:h-[540px] lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="mb-6 font-jakarta text-4xl font-bold lg:text-6xl">
            CodingDocs
          </h1>
          <p className="text-sm text-text-400 lg:max-w-lg lg:text-base">
            Software Development Documentation Hub
            
          </p>
          <div className="mt-8 flex flex-col gap-4 lg:flex-row">

          </div>
        </div>
        <div className="mt-6 flex-1 lg:mt-0 xl:flex-none">
          <ThemedImage
            sources={{
              light: '/index/develop.jpg',
              dark: '/index/develop.jpg',
            }}
            alt="Image not found"
            className="max-w-[420px] lg:max-w-[560px]"
          />
        </div>
      </div>
    </section>
  );
}
