import React, { useState } from 'react';

import CircleTimer from './components/CircleTimer'
import TimerInput from './components/TimerInput'



const App = () => {

  const [timerLength, setTimerLength] = useState(0)

  const handleSetTimer = (value) => setTimerLength(value)

  return (timerLength === 0
    ? <TimerInput onSubmitLength={handleSetTimer} />
    : <CircleTimer setNewTime={handleSetTimer} length={timerLength} />)

}



export default App
