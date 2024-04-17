// ComponentWithLoading.stories.tsx

import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'
import ComponentWithLoading, {
  ComponentWithLoadingProps,
} from './ComponentWithLoading'

export default {
  title: 'Components/C/ComponentWithLoading',
  component: ComponentWithLoading,
} as Meta

const Template: Story<ComponentWithLoadingProps> = (args) => (
  <ComponentWithLoading {...args} />
)

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
  children: <div>Content</div>,
}

export const NotLoading = Template.bind({})
NotLoading.args = {
  isLoading: false,
  children: <div>Content</div>,
}
