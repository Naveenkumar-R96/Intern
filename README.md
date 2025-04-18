# Front-End Developer Assignment - UI Component Library

This repository showcases the completion of my front-end developer assignment, which includes building reusable UI components, implementing a token-based color system, and ensuring accessibility and responsiveness. The project was developed using Vite, Tailwind CSS, React, and Storybook.

## Table of Contents
- [Assignment Overview](#assignment-overview)
- [Color Tokens](#color-tokens)
- [Components Developed](#components-developed)
- [Storybook Documentation](#storybook-documentation)
- [Setup Instructions](#setup-instructions)
- [Contributing](#contributing)
- [License](#license)

## Assignment Overview
The goal of this assignment was to create a UI component library with reusable components that meet enterprise B2B UI needs. The key tasks included:

- Implementing a **color token system** for consistent design.
- Developing **reusable data display and navigation components**.
- Managing **interaction states** (like hover, focus, active, etc.).
- Ensuring the **accessibility** and **responsiveness** of components.
- Documenting components using **Storybook** for easy usage and exploration.

## Color Tokens
A robust token-based color system was created to meet the needs of a B2B enterprise UI. The system includes:

- **Primary Colors**: Core brand colors used throughout the UI.
- **Secondary Colors**: Supporting colors for secondary actions and accents.
- **Tertiary Colors**: For less emphasized UI elements.
- **Neutral Colors**: Grayscale tones used for backgrounds, borders, and neutral elements.
- **Semantic Colors**:
  - **Success**: Green for success messages or positive actions.
  - **Info**: Blue for informational content.
  - **Warning**: Yellow for warning messages.
  - **Error**: Red for error messages and alerts.

The color system ensures a consistent visual identity and supports different UI states.

## Components Developed
This repository includes the following reusable components, designed to be flexible and customizable:

1. **Badge Component**  
   - Displays a label or status, can show different colors based on semantic tokens (Success, Warning, Error, etc.).

2. **Accordion Component**  
   - Collapsible content panels for navigation or content display, with smooth interactions and responsiveness.

3. **Navbar Component**  
   - A responsive navigation bar with links and menus, supporting both desktop and mobile views.

## Storybook Documentation
The components have been documented using **Storybook** for easy exploration. Each component is presented with different states and configurations, ensuring clear and concise usage.

- Storybook provides a visual reference for each component and its various interaction states.
- The color system is demonstrated within Storybook to help developers see how the tokens work in real-world scenarios.

## Setup Instructions
To get started with this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Naveenkumar-R96/Intern.git
2. Navigate into the project directory:
   cd Intern
3. install the dependencies:
   npm i
5. start the development server:
   npm run dev
6. open storybook for component exploration:
   npm run storybook
7. visit http://localhost:6006 to view the Storybook UI.

## contribution

Feel free to fork the repository, create a branch, and submit a pull request if you'd like to contribute. Make sure your changes align with the overall structure of the project, and follow the best practices for reusable components.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
