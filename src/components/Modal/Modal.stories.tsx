// Modal.stories.tsx

import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Modal, { ModalProps } from './Modal';
import { Button } from '@mui/material';

export default {
  title: 'Components/M/Modal',
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>Open Modal</Button>
      <Modal {...args} open={open} onClose={handleClose}>
        <p>Modal content goes here...</p>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Modal Title',
  actions: [
    {
      name: 'Cancel',
      props: { color: 'secondary' },
      handler: () => console.log('Cancel clicked'),
    },
    {
      name: 'Confirm',
      props: { color: 'primary' },
      handler: () => console.log('Confirm clicked'),
    },
  ],
};