// ChipStatus.stories.tsx

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ChipStatus, { Props } from './ChipStatus';

export default {
  title: 'Components/C/ChipStatus',
  component: ChipStatus,
} as Meta;

const Template: Story<Props> = (args) => <ChipStatus {...args} />;

export const Error = Template.bind({});
Error.args = {
  label: 'Error',
  colorDot: '#BDBDBD',
  type: 'error',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Success',
  colorDot: '#BDBDBD',
  type: 'success',
};