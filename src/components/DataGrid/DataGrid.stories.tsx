// GridData.stories.tsx

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import DataGrid, { GridDataProps } from './DataGrid';

export default {
  title: 'Components/D/DataGrid',
  component: DataGrid,
} as Meta;

const Template: Story<GridDataProps> = (args) => <DataGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: [
    { label: 'Column 1', property: 'col1' },
    { label: 'Column 2', property: 'col2' },
  ],
  data: [
    { col1: 'Data 1', col2: 'Data 2' },
    { col1: 'Data 3', col2: 'Data 4' },
  ],
  totalRecords: 2,
  pageNumber: 1,
  pageSize: 10,
  rowsPerPageOptions: [5, 10, 50],
  onPageChange: (value: number) => console.log('Page changed:', value),
  onPageSizeChange: (value: number) => console.log('Page size changed:', value),
  onOderByChange: (property: string, orderDirection: 'asc' | 'desc') => console.log('Order by changed:', property, orderDirection),
};