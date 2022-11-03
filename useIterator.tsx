import React, { useState } from 'react';

export default function useIterator(str) {
  const [currentCharac, setCurrentCharac] = useState(0);
  const nextCharac = () => {
    if (currentCharac < str.length - 1) {
      let current = currentCharac + 1;
      setCurrentCharac(current);
    }
  };

  const previousCharac = () => {
    debugger;
    if (currentCharac > 0) {
      let current = currentCharac - 1;
      setCurrentCharac(current);
    }
  };

  return {
    nextCharac,
    previousCharac,
    currentCharac,
  };
}
