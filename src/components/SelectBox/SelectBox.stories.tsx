// SelectBox.stories.tsx

import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import SelectBox, { SelectBoxProps } from './SelectBox';

export default {
  title: 'Components/S/SelectBox',
  component: SelectBox,
} as Meta;

const Template: Story<SelectBoxProps> = (args) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <SelectBox {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Select an option',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ],
};