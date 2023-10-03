import React, { useState } from 'react';
import Layout from '../components/layout';
import DraggableCountry from '../components/draggable_country';
import BigCountry from '../components/big_country';
import SmallCountry from '../components/small_country';

const Game = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [clonedSmallCountries, setClonedSmallCountries] = useState([]);

  const startGame = () => {
    setScore(0);
    setGameOver(false);
  };

  const endGame = () => {
    setGameOver(true);
  };

  const increaseScore = () => {
    setScore(score + 1);
  };

  const decreaseScore = () => {
    setScore(score - 1);
  };

  const cloneSmallCountry = () => {
    // Clone the small country component and assign a unique key
    const clonedSmallCountry = (
      <DraggableCountry
        key={uniqueKeyGenerator()} // You need a function to generate unique keys
        country={<SmallCountry />}
        isTopSmallCountry={true}
      />
    );

    // Update the state to include the cloned small country
    setClonedSmallCountries((prevClonedSmallCountries) => [
      ...prevClonedSmallCountries,
      clonedSmallCountry,
    ]);
  };

  // Function to generate unique keys (you can implement this)
  const uniqueKeyGenerator = () => {
    // Implement a unique key generation logic here
  };

  return (
    <Layout>
      <div>
        <h1>Country Packing</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div className="draggable-country">
            <div className="big-country-container">
              {/* Center the big country below the heading */}
              <BigCountry />
            </div>
            <DraggableCountry country={<SmallCountry />} isTopSmallCountry={true} />
          </div>

          {/* Clone Small Country button */}
          <button onClick={cloneSmallCountry}>Spawn a Saarland</button>

          {/* Render the cloned small countries */}
          {clonedSmallCountries.map((clonedCountry, index) => (
            <div key={`clonedCountry-${index}`}>{clonedCountry}</div>
          ))}

          {/* Rest of your code */}
        </div>
      </div>
    </Layout>
  );
};

export default Game;