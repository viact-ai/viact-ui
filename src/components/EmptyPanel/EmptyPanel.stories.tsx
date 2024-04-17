// EmptyPanel.stories.tsx

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import EmptyPanel, { EmptyPanelProps } from './EmptyPanel';

export default {
  title: 'Components/E/EmptyPanel',
  component: EmptyPanel,
} as Meta;

const Template: Story<EmptyPanelProps> = (args) => <EmptyPanel {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  lengthData: 0,
};

export const Empty = Template.bind({});
Empty.args = {
  isLoading: false,
  iconEmpty: 'https://example.com/icon.jpg',
  titleEmpty: 'No Data',
  contentEmpty: 'There is no data to display.',
  lengthData: 0,
};

export const WithData = Template.bind({});
WithData.args = {
  isLoading: false,
  lengthData: 1,
  children: <div>Data</div>,
};