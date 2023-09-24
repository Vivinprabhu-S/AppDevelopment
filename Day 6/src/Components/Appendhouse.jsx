import React, { useState } from 'react';
import '../Assests/css/Appendhouse.css';

export default function Appendhouse() {
  const [boxCount, setBoxCount] = useState(0); // State to keep track of the number of boxes

  const handleAddBox = () => {
    setBoxCount(boxCount + 1);
  };

  const renderBoxes = () => {
    const boxes = [];
    for (let i = 0; i < boxCount; i++) {
      boxes.push(<div key={i} className="box"></div>);
    }
    return boxes;
  };

  return (
    <div className="App">
      <div className="container">
        <div className="box-container">{renderBoxes()}</div>
        <button className="add-box" onClick={handleAddBox}>
          Add Box
        </button>
      </div>
    </div>
  );
}
