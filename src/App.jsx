import { useState } from "react" 
import Title from "./components/Title"
import Explanation from "./components/Explanation"
import BeforeText from "./components/BeforeText"
import AfterText from "./components/AfterText"
import Setting from "./components/Setting"
const App = () => {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [alphaMap, setAlphaMap] = useState([
    '凡', '曰', '匸', '卩', '乇', '下', '巳', '廾', '丨', '丿',
    '片', '乚', '从', '冂', '口', '尸', '甩', '尺', '丂', '丁',
    '凵', '丷', '山', '乂', '丫', '乙'
  ]);

  const convert = (text) => {
    text = text.replace(/A/g, 'a');

    for (let i = 0; i < 26; i++) {
      if (alphaMap[i]) {
        const char = String.fromCharCode(65 + i);
        text = text.replace(new RegExp(char, 'gi'), alphaMap[i]);
      }
    }

    setOutputText(text)
  }

  return (
      <div className="wrapper">
          <div className="container">
              <Title/> 
              <Explanation/> 
              <BeforeText  setInputText={setInputText} convert={convert}/>
              <AfterText outputText={outputText}/> 
              <Setting alphaMap={alphaMap} setAlphaMap={setAlphaMap}/>
              <nobr><table border="0" cellspacing="0" cellpadding="0"><tbody><tr><td><a href="https://ctr.stylemap.co.jp/"><img src="https://www.f-counter.net/ani1/65/1736206873/" alt="無料アクセスカウンター" border="0" style={{margin:"0px", padding:"0px", border:"0px"}}/></a></td>
<td><a href="https://ctr.stylemap.co.jp/"><img src="https://www.f-counter.net/ani2/65/1736206873/" alt="無料アクセスカウンター" border="0" style={{margin:"0px", padding:"0px", border:"0px"}}/></a></td></tr></tbody></table></nobr>

          </div>
      </div>
  )
}

export default App
