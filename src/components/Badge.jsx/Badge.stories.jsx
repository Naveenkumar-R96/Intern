import React from 'react';
import Badge from '../Badge.jsx/Badge';
import '../../index.css'; // Ensure to import your CSS styles

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: `The \`Badge\` component is used to display small, count-like notifications or labels.
It can be customized with different colors (via the \`variant\` prop) and sizes (via the \`size\` prop).
It is commonly used to indicate status or a number of notifications.`,
      },
      page: () => (
        <>
          <h1>Badge Component</h1>
          <p>
            The \`Badge\` component displays a small label or indicator. It's useful for showing
            notifications, statuses, or counts. Customize the color, size, and label through props.
          </p>
          <h2>Usage</h2>
          <pre>
            {`<Badge label="New" variant="primary" size="md" />`}
          </pre>
          <h3>Props</h3>
          <ul>
            <li><strong>label</strong>: The text displayed inside the badge (string).</li>
            <li><strong>variant</strong>: The color of the badge. Options: \`primary\`, \`success\`, \`warning\`, \`error\`.</li>
            <li><strong>size</strong>: The size of the badge. Options: \`sm\`, \`md\`, \`lg\`.</li>
          </ul>
        </>
      ),
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
