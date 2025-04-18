import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-md mb-2">
      <button
        className="w-full text-left p-4 font-semibold bg-gray-100 hover:bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="accordion-content"
      >
        {title}
      </button>
      {isOpen && (
        <div id="accordion-content" className="p-4 border-t text-gray-700 bg-white">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
