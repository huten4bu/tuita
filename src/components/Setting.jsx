import { useState } from "react" 
import React from 'react';
const Setting = (props) => {


    const handleChange = (index, value) => {
      const newInputs = [...props.alphaMap];
      newInputs[index] = value;
      props.setAlphaMap(newInputs);
    };
  
    return (
        <div>
        {Array.from({ length: 26 }, (_, i) => (
          <React.Fragment key={i}>
            {i % 7 === 0 && <br />}
            <span style={{ marginRight: '10px' }}>
              <label>{String.fromCharCode(65 + i)}:</label>
              <input 
                type="text" 
                value={props.alphaMap[i]} 
                onChange={(e) => handleChange(i, e.target.value)} 
                maxLength="1"
                style={{ width: '20px' }}
              />
            </span>
          </React.Fragment>
        ))}
      </div>
    );
}

export default Setting