import { Fireworks } from '@fireworks-js/react'
import './App.css'
import useCountdown from './hook/useCountdown'

function App() {
  const {seconds,minutes,hours,days} = useCountdown()

  const d = new Date()
  let dayText = d.toLocaleDateString();
  
  return (
    <div>
      <div className='bg-black' />
      {dayText == "01/01/2024" ? (
        <div className='firework-container'>
          <h1 className='big-text'>✨🎇HAPPY NEW YEAR🎇✨</h1>
          <h1 className='big-text'>🎆2024🎆</h1>
          <p className='desc'>wish you have the best year</p>
          <Fireworks
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
        </div>
      ) : (
      <div className='timer-container'>
        <h1 className='countdown'>COUNTDOWN🎉</h1>
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
