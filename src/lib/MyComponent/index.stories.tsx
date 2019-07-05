import * as React from 'react';
import { storiesOf } from '@storybook/react';
import MyComponent from '.';

storiesOf('定制/组件', module).add('default', () => {
  return <MyComponent id={3} />;
});
