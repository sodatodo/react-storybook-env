import React from 'react';
import { Button } from '@storybook/react/demo';
import { DatePicker } from 'antd'
import 'antd/dist/antd.css'

export default { title: 'Button' };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <DatePicker />
);