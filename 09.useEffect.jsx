import React, { useState, useEffect } from 'react'

function App() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval) // Cleanup on unmount
  }, []) // Empty dependency array means this effect runs once after the first render

  return (
    <div>
      <p>Current time: {time.toLocaleTimeString()}</p>
    </div>
  )
}

export default App
