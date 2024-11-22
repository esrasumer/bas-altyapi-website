"use client"

import React, { useState } from 'react';

const ReadMore = ({ text, maxLength }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div>
      <p>
        {isReadMore ? text.slice(0, maxLength) + '...' : text}
      </p>
      <button onClick={toggleReadMore}>
        {isReadMore ? 'Read More' : 'Show Less'}
      </button>
    </div>
  );
};

export default ReadMore;