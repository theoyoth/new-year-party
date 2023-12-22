import { Fireworks } from '@fireworks-js/react'
import './App.css'
import { useEffect, useRef,useState } from 'react'

function App() {
  const container = useRef(null)
  const [lunchTheFireworks, setLunchTheFireworks] = useState(false)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const deadline = "January, 01, 2024";
  
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setSeconds(Math.floor((time / 1000) % 60))
    setMinutes(Math.floor((time / (1000 * 60) % 60)))
    setHours(Math.floor((time / (1000 * 60 * 60 ) % 24)))
    setDays(Math.floor((time / (1000 * 60 * 60 * 24))))
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getTime(deadline)
    },1000)
    // const timeout = setTimeout(() => {
    //   setLunchTheFireworks(true)
    // },time)

    return () => {
      clearInterval(interval)
      // clearTimeout(timeout)
    }
  },[])
  // const toggleSound = () => {
  // }
  return (
    <div>
      {/* <div>
        <button onClick={toggleSound()}>sound</button>
      </div> */}
      {lunchTheFireworks ? (
        <>
          <h1 className='big-text'>HAPPY NEW YEAR</h1>
          <Fireworks
            ref={container}
            options={
              { opacity: 0.5,
                sound: {
                  enabled: false,
                  files: [
                    'https://fireworks.js.org/sounds/explosion0.mp3',
                    'https://fireworks.js.org/sounds/explosion1.mp3',
                    'https://fireworks.js.org/sounds/explosion2.mp3'
                  ],
                  volume: {
                    min: 2,
                    max: 8
                  }
                },
                explosion:5,
                mouse: {
                  click: true,
                  move: false,
                  max: 2
                }
              }
            }
            style={{
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              position: 'fixed',
              background: '#000'
            }}
          />
        </>
      ):(
      <div className='timer-container'>
        <h1 className='countdown'>COUNTDOWN</h1>
        <div className='timer'>
          <div className='box'>
            <p>days</p>
            <p>{days}</p>
          </div>
          <div className='box'>
            <p>hours</p>
            <p>{hours}</p>
          </div>
          <div className='box'>
            <p>minutes</p>
            <p>{minutes}</p>
          </div>
          <div className='box'>
            <p>seconds</p>
            <p>{seconds}</p>
          </div>
        </div>
      </div>
      )
    }
    </div>
  )
}

export default App
