import { useState } from "react" 

const Setting = (props) => {


    const handleChange = (index, value) => {
      const newInputs = [...props.alphaMap];
      newInputs[index] = value;
      props.setKanjiMap(newInputs);
    };
  
    return (
      <div>
        {Array.from({ length: 26 }, (_, i) => (
          <div key={i}>
            <label>{String.fromCharCode(65 + i)}:</label>
            <input 
              type="text" 
              value={props.alphaMap[i]} 
              onChange={(e) => handleChange(i, e.target.value)} 
              maxLength="1"
            />
          </div>
        ))}
      </div>
    );
}

export default Setting