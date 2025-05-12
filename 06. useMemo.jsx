// its stores the data calculated so we don't have to do it again and again!

import React, {useState, useMemo} from 'react'

function App() {
  const [num, setNum] = useState(0)
  const double = useMemo(()=>num*2,[num])

  return (
    <div>
      <p>Number : {num}</p>
      <p>Double : {double}</p>
      <button onClick={()=>setNum(num+1)} >+1</button>
    </div>
  )
}

export default App
