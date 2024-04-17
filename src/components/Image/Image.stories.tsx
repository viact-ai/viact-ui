// Image.stories.tsx

import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'
import Image, { ImageProps } from './Image'

export default {
  title: 'Components/I/Image',
  component: Image,
} as Meta

const Template: Story<ImageProps> = (args) => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
  src: 'https://example.com/image.jpg',
  width: '200px',
  height: '200px',
  isSmall: false,
}

export const Small = Template.bind({})
Small.args = {
  ...Default.args,
  isSmall: true,
}

export const Error = Template.bind({})
Error.args = {
  src: 'https://example.com/invalid-url.jpg',
  width: '200px',
  height: '200px',
  isSmall: false,
}
