// EditableField.stories.tsx

import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'
import EditableField, { EditableFieldProps } from './EditableField'

export default {
  title: 'Components/E/EditableField',
  component: EditableField,
} as Meta

const Template: Story<EditableFieldProps> = (args) => (
  <EditableField {...args} />
)

export const Default = Template.bind({})
Default.args = {
  defaultValue: 'Editable Field',
  errorMessage: 'This field is required',
  isRequired: true,
  maxLength: 50,
  textDecoration: 'none',
  textDecorationThickness: 1,
  variant: 'standard',
  onChange: (value: string) => console.log('Change:', value),
  onSave: (value: string) => console.log('Save:', value),
}
