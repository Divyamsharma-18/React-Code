// Same as useState but for bigger data and more functions, it is used!

import React, { useReducer } from 'react';

const reducer = (state) => !state;

function App() {
  const [isOn, dispatch] = useReducer(reducer, false);

  return (
    <div>
      <p>{isOn ? 'On' : 'Off'}</p>
      <button onClick={() => dispatch()}>Toggle</button>
    </div>
  );
}

export default App;
