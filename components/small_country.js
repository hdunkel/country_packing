import React from "react";
import Image from 'next/image';

const SmallCountry = () => {
    return (
      <Image
        src="/images/saarland.svg" // Adjust the path to your image
        alt="Saarland"
        width={50} // Set the desired width
        height={50} // Set the desired height
      />
    );
  };

export default SmallCountry;
