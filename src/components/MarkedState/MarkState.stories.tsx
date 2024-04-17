// MarkedState.stories.tsx

import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'
import MarkedState, { MarkedStateProps } from './MarkState'

export default {
  title: 'Components/M/MarkedState',
  component: MarkedState,
} as Meta

const Template: Story<MarkedStateProps> = (args) => <MarkedState {...args} />

export const Approve = Template.bind({})
Approve.args = {
  state: 'approve',
}

export const Acknowledged = Template.bind({})
Acknowledged.args = {
  state: 'acknowledged',
}

export const Reject = Template.bind({})
Reject.args = {
  state: 'reject',
}

export const Invalid = Template.bind({})
Invalid.args = {
  state: 'invalid',
}

export const Unmark = Template.bind({})
Unmark.args = {
  state: 'unmark',
}

export const Dismiss = Template.bind({})
Dismiss.args = {
  state: 'dismiss',
}
