import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useIterator from './useIterator';

export const IteratorTest = ({ str = 'helloworld' }) => {
  const { nextCharac, previousCharac, currentCharac } = useIterator(str);
  return (
    <div>
      {/* Highlight the char that match the  in the string*/}
      <p>
        Test string <i>{str}</i>
      </p>
      {/* Display the current char*/}
      <p>
        Current Character? <b>{str.charAt(currentCharac)}</b>
      </p>

      {/* implement the next functionality */}
      <button onClick={nextCharac}>Next</button>
      {/* implement the Previous functionality */}
      <button onClick={previousCharac}>Previous</button>
    </div>
  );
};
