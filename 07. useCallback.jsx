import React, {useCallback} from 'react'

function App() {
  const hello = useCallback(()=>{alert('Hello')}, [])

  return (
    <div>
      <button onClick={hello} >Say Hello</button>
    </div>
  )
}

export default App
