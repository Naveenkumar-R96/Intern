import React from 'react';
import Badge from '../Badge.jsx/Badge';
import '../../index.css';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: `The \`Badge\` component displays a small label or indicator. It is useful for showing notifications or statuses.`,
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'success', 'warning', 'error'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

const Template = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: 'Primary', variant: 'primary', size: 'md' };

export const Success = Template.bind({});
Success.args = { label: 'Success', variant: 'success', size: 'sm' };

export const Error = Template.bind({});
Error.args = { label: 'Error', variant: 'error', size: 'lg' };
