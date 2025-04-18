import React from 'react';
import Accordion from './Accordian';
import '../../index.css'; // Ensure to import your CSS styles
export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
  },
};

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Click to Expand',
  content: 'This is the hidden content revealed when the accordion is open.',
};
