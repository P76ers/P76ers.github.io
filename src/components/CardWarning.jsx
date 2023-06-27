import React from 'react';
import { MyWarnIcon } from '../icons/index';

export function CardWarning({ children }) {
  let content = [];
  for (let i = 1; i < children.length; i++) {
    content.push(children[i]);
  }
  return (
    <div className="CardContainerWarn">
      <div className="CardHeader">
        <div className="CardIcon">{<MyWarnIcon />}</div>
        <div className="CardTitle">{children[0]}</div>
      </div>
      <div className="CardContent">{content}</div>
    </div>
  );
}

export default CardWarning;
