import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'
import YearMonthPicker, { YearMonthPickerProps } from './YearMonthPicker'

export default {
  title: 'Components/Y/YearMonthPicker',
  component: YearMonthPicker,
} as Meta

const Template: Story<YearMonthPickerProps> = args => {
  return <YearMonthPicker {...args} />
}

export const Default = Template.bind({})
Default.args = {
  fullWidth: false,
}
