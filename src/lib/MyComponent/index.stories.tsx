import * as React from 'react';
import MyComponent from '.';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof MyComponent> = {
  title: '定制组件',
  component: MyComponent
};

export default meta;

type Story = StoryObj<typeof MyComponent>;
export const Default: Story = {
  render: () => <MyComponent id={10000}/>
}

