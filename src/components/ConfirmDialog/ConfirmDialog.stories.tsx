import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ConfirmDialog, { ConfirmDialogProps } from './ConfirmDialog';

export default {
  title: 'Components/C/ConfirmDialog',
  component: ConfirmDialog,
} as Meta;

const Template: Story<ConfirmDialogProps> = (args) => <ConfirmDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: true,
  title: 'Confirm Dialog Title',
  content: 'Confirm Dialog Content',
  cancelButtonText: 'Cancel',
  confirmButtonText: 'Confirm',
  onClose: () => {},
  onConfirm: () => {},
};