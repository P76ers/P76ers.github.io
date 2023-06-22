import React from 'react';
import clsx from 'clsx';

/* PATH Footer2 */

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className="container-fluid container">
        <div className="footer__row">
          <div className="footer__data">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            <p className="footer__description mb-8">
              CodingDocs provides
              <br />
              Software Development Documentation.
            </p>
          </div>
          <div className="links">{links}</div>
        </div>
        {copyright && <div className="footer__bottom ">{copyright}</div>}
      </div>
    </footer>
  );
}
