import React from 'react';

export function CardChapter({ children }) {
  let content = [];
  for (let i = 1; i < children.length; i++) {
    content.push(children[i]);
  }
  return (
    <div className="mx-auto max-w-7xl">
      {' '}
      <div className="mdLayerTop">
        <div className="text-center">{children[0]}</div> <div>{content}</div>{' '}
      </div>{' '}
    </div>
  );
}

export default CardChapter;
