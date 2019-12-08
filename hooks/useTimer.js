import React, { useState, useEffect } from 'react'

export default function useTimer(startTimeInSeconds) {

  const [remainingSeconds, setRemainingSeconds] = useState(startTimeInSeconds)
  const [paused, setPaused] = useState(true)

  useEffect(() => {
    let counterID

    if (!paused) {
      counterID = setInterval(() => {
        setRemainingSeconds(prevState => prevState - 1)
      }, 1)
    } else {
      if (typeof counterID !== 'undefined') {
        clearInterval(counterID)
      }
    }
    return () => {
      clearInterval(counterID)
    };
  }, [remainingSeconds, paused])

  return {
    time: remainingSeconds,
    start: () => setPaused(false),
    stop: () => setPaused(true),
    reset: () => {
      setPaused(true)
      setRemainingSeconds(startTimeInSeconds)
    },
    paused: paused,
  }
}
