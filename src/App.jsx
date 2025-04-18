import React from "react";
import Badge from "./components/Badge.jsx/Badge";
import Accordion from "./components/Accordian/Accordian";
import TopNavBar from "./components/TopNavbar/TopNavBar";
import "./index.css";

function App() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Assignment Output</h1>

      <div>
        <h2 className="text-xl font-semibold mb-2">Badges</h2>
        <Badge label="Primary" variant="primary" size="md" />
        <Badge label="Success" variant="success" size="sm" />
        <Badge label="Error" variant="error" size="lg" />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Accordions</h2>
        <Accordion
          title="What is a Badge?"
          content="A badge is a small UI element used to show status or labels."
        />
        <Accordion
          title="What is an Accordion?"
          content="An accordion allows hiding/showing content interactively."
        />
      </div>

      <h1 className="text-bold text-2xl">Navigation componets</h1>

      <div>
        <TopNavBar
          logo="https://via.placeholder.com/100x40"
          links={links}
          backgroundColor="#1f2937" // Tailwind gray-800
          textColor="#ffffff"
        />
        <main className="p-4 text-gray-800">
          <h1 className="text-3xl font-bold">Welcome to My App</h1>
          <p>This is a sample React application using a Top Navigation Bar.</p>
        </main>
      </div>
    </div>
  );
}

export default App;
