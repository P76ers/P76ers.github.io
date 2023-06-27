import React from 'react';
import { MyDangerIcon } from '../icons/index';

export function CardDanger({ children }) {
  let content = [];
  for (let i = 1; i < children.length; i++) {
    content.push(children[i]);
  }
  return (
    <div className="CardContainerDanger">
      <div className="CardHeader">
        <div className="CardIcon">{<MyDangerIcon />}</div>
        <div className="CardTitle">{children[0]}</div>
      </div>
      <div className="CardContent">{content}</div>
    </div>
  );
}

export default CardDanger;
