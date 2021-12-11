import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [value, setValue] = useState(10)

  const hello = (who) => () => { 
      console.log('hello', who) 
    }

  const setToValue = (newValue) => () => {
    setValue(newValue)
  }

  const logClick = () => {
    console.log('clicked the button')
  }

  const resetState = () => {
    setValue(0)
  }

  const handleClick = () => {
    logClick()
    resetState()
  }
    
  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);