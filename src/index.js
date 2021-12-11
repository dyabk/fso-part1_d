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

  const hello = (who) => {
    const handler = () => { 
      console.log('hello', who) 
    }
    return handler
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
      <button onClick={hello('world')}>button</button>
      <button onClick={hello('react')}>button</button>
      <button onClick={hello('function')}>button</button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);