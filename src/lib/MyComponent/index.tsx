import * as React from 'react';

export interface Props {
  id: number;
}
const MyComponent: React.FC<Props> = ({ id }) => {
  return <div>收到props: {id}</div>;
};

export default MyComponent;
