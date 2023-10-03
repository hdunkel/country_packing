import React, { useState } from "react";
import Image from 'next/image';

const BigCountry = () => {
    const [size_1, setSize_1] = useState(390);
    const [size_2, setSize_2] = useState(727/525*size_1);
    return (
      <Image
        src="/images/Germany-Outline.svg" // Adjust the path to your image
        alt="Germany"
        width={size_1} // Set the desired width
        height={size_2} // Set the desired height
      />
    );
  };

export default BigCountry;