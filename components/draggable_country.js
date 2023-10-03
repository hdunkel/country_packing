import React, { useState } from 'react';

const DraggableCountry = ({ country, isTopSmallCountry }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0); // Added rotation state

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);

    const { clientX, clientY } = e;
    const offsetX = clientX - position.x;
    const offsetY = clientY - position.y;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    document.onmousemove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX - offsetX, y: clientY - offsetY });
    };

    document.onmouseup = () => {
      setIsDragging(false);
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };

  const handleMouseMove = (e) => {
    // No need to do anything here; the logic is in handleMouseDown.
  };

  const handleMouseUp = () => {
    // No need to do anything here; the logic is in handleMouseDown.
  };

  const handleMouseWheel = (e) => {
    // Calculate the new rotation angle based on the scroll direction
    const newRotation = rotation + (e.deltaY > 0 ? 15 : -15); // Adjust the rotation increment as needed

    // Ensure the rotation angle stays within 360 degrees
    setRotation((newRotation + 360) % 360);
  };

  return (
    <div
      style={{
        position: 'absolute',
        transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`,
        cursor: isDragging ? 'grabbing' : isTopSmallCountry ? 'grab' : 'default',
      }}
      onMouseDown={isTopSmallCountry ? handleMouseDown : null}
      onWheel={handleMouseWheel} // Add the wheel event listener
    >
      {country}
    </div>
  );
};

export default DraggableCountry;
