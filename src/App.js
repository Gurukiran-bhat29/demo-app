import React, { useState, useEffect } from 'react';
import './App.css';
import Buttons from './Buttons';

function App() {
  const abc={a: 1,b:2};
  const [count, setCount] = useState('');
  const [showButtons, setshowButtons] = useState(false);
  const [clickCount, setClickCount] = useState({});
  const [totalCount, setTotalCount] = useState(0);
  const [indx, setIndx] = useState('');
  const [click, setClick] = useState(abc);
  console.log("object",click);
  /* 
    This below code(useEffect Method) is not used here and 
    kept for future references 
  */
  // useEffect(() => {
  //   const newSum = Object.values(createButtonCount).reduce(
  //     (acc, el) => acc + el,
  //     0
  //   );
  //   setSum(newSum);
  // }, []);

  const onHandleChange = (e) => {
    setClickCount((prevVal) => {
      let idx = Number(e.target.id);
      const val = prevVal[idx] ? prevVal[idx] : 0;
      return {
        ...prevVal, [idx]: val + 1
      }
    })
    setIndx(e.target.id)
    setTotalCount(totalCount + 1)
  }

  return (
    <div className="App">
      <div>
        <input
          placeholder='Enter the count'
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        >
        </input>
        <button onClick={() => setshowButtons(true)}>Click Here</button>
      </div>
      <div>
        {showButtons &&
          [...Array(count)].map((el, idx) => {
            return (
              <button key={idx} id={idx} onClick={onHandleChange}>
                button {idx}
              </button>
            );
          })}
        {/* {showButtons &&
          <Buttons
            count={count}
          />
        } */}
      </div>
      {showButtons && totalCount > 0 && (
        <div>
          <h5>Count of button {[indx]} : {clickCount[indx]}</h5>
          <h6>Total count of buttons: {totalCount}</h6>
        </div>
      )}
    </div>
  );
}

export default App;
