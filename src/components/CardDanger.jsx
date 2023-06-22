import React from 'react';
import { paramCase } from 'param-case';
import clsx from 'clsx';

export function CardSectionDanger({
  id,
  title,
  children,
  description,
  className,
  hasSubSections = false,
  HeadingTag = 'h2',
}) {
  return (
    <div
      className={clsx(
        'homepage-section',
        hasSubSections && 'has-sub-sections',
        className
      )}
    >
      {title && <HeadingTag id={id ?? paramCase(title)}>{title}</HeadingTag>}
      {description && <p className="section-description">{description}</p>}
      <div className="section-content">{children}</div>
    </div>
  );
}

export function CardDanger({ id, icon, title, description, to }) {
  return (
    <div className="DangerCard">
    <div class="flex justify-start ...">
      <div className="icon">{icon}</div>
      <div className="DangerCard-content">
        <div className="title" id={id && paramCase(title)}>
          {title}
        </div>
        <div className="description">{description}</div>
        </div>
      </div>
      </div>
  );
}
