import React from 'react';
import * as ReactUIKit from '@dytesdk/react-ui-kit';
import * as ReactWebCore from '@dytesdk/react-web-core';

import DemoElements from '../../components/DemoElements';

const ButtonExample = (props) => (
  <button
    {...props}
    style={{
      backgroundColor: 'white',
      color: 'black',
      border: 'solid red',
      borderRadius: 20,
      padding: 10,
      cursor: 'pointer',
      ...props.style,
    }}
  />
);

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ButtonExample,
  ...ReactUIKit,
  ...ReactWebCore,

  // DemoElements used in react-ui-kit live codeblocks
  ...DemoElements,
};

export default ReactLiveScope;
