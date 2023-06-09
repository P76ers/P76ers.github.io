import React from 'react';
import { MyInfoIcon } from '../icons/index';

export function CardInfo({ children }) {
  let content = [];
  for (let i = 1; i < children.length; i++) {
    content.push(children[i]);
  }
  return (
    <div className="CardContainerInfo">
      <div className="CardHeader">
        <div className="CardIcon">{<MyInfoIcon />}</div>
        <div className="CardTitle">{children[0]}</div>
      </div>
      <div className="CardContent">{content}</div>
    </div>
  );
}

export default CardInfo;
