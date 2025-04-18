import React from 'react';
import TopNavBar from './TopNavBar'; // Update the path as needed
import '../../index.css'; // Tailwind CSS included here

export default {
  title: 'Components/TopNavBar',
  component: TopNavBar,
  parameters: {
    docs: {
      description: {
        component:
          'A responsive top navigation bar built with Tailwind CSS. Supports optional logo, links, background, and text color customization.',
      },
    },
  },
  argTypes: {
    logo: { control: 'text' },
    links: {
      control: 'object',
      defaultValue: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
      ],
    },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
  },
};

const Template = (args) => <TopNavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: 'https://via.placeholder.com/100x40',
  links: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
  ],
  backgroundColor: '#1f2937', // Tailwind gray-800
  textColor: '#ffffff',
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  logo: 'https://via.placeholder.com/100x40',
  links: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ],
  backgroundColor: '#10b981', // Tailwind emerald-500
  textColor: '#ffffff',
};

export const WithoutLogo = Template.bind({});
WithoutLogo.args = {
  links: [
    { label: 'Dashboard', href: '/' },
    { label: 'Settings', href: '/settings' },
  ],
  backgroundColor: '#111827', // Tailwind gray-900
  textColor: '#f9fafb', // Tailwind gray-50
};
