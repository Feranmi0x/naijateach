
import React, { useState } from 'react';

type Props = {
    result: string;
    hasActiveSubscription: boolean;
 }
const CollapsibleDiv = ({result, hasActiveSubscription}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDiv = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Button to toggle the div */}
      <button 
        disabled={!hasActiveSubscription}
        onClick={toggleDiv} 
        className="bg-yellow-500 text-white px-4 py-2 rounded"
      >
        {isOpen ? 'Close' : 'Homonyms'}
      </button>

      {/* Collapsible div */}
      <div
        style={{
          height: isOpen ? 'auto' : '0px', // Conditional height based on the state
          overflow: 'hidden', // Hide content when collapsed
          transition: 'height 0.3s ease-out', // Smooth transition
        }}
        className="mt-4"
      >
        {result}
      </div>
    </div>
  );
};

export default CollapsibleDiv;
