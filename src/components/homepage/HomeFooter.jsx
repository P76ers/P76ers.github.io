import React from 'react';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';

import { GitHub } from 'react-feather';

/* PATH Footer Index.html */
export default function HomeFooter({ className }) {
  return (
    <footer className="bg-secondary-900">
      <div
        className={clsx(
          'mx-auto flex max-w-7xl flex-col gap-4 px-10 py-8 lg:flex-row lg:items-center lg:gap-8',
          className
        )}
      >
        {/* NOTE Logo */}
        <div>
          <ThemedImage
            sources={{ light: '/logo/light.svg', dark: '/logo/dark.svg' }}
            alt="Logo"
            className="h-10"
          />
        </div>
        {/* NOTE Icon */}
        <div className="flex items-center gap-3">
          {/* <Link href="https://github.com/P76ers" aria-label="LinkedIn">
            <GitHub className="h-6 w-6 text-zinc-400 hover:text-primary" />
          </Link> */}
        </div>
        <div className="flex-1 text-zinc-400 lg:text-right">
          Copyright &copy; CodingDocs since 2023. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
