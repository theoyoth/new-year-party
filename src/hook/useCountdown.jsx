import { useEffect, useState } from 'react'

const useCountdown = () => {
  const [seconds, setSeconds] = useState(null)
  const [minutes, setMinutes] = useState(null)
  const [hours, setHours] = useState(null)
  const [days, setDays] = useState(null)

  const deadline = "January, 01, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
  
    setSeconds(Math.floor((time / 1000) % 60))
    setMinutes(Math.floor((time / (1000 * 60) % 60)))
    setHours(Math.floor((time / (1000 * 60 * 60 ) % 24)))
    setDays(Math.floor((time / (1000 * 60 * 60 * 24))))
  
  };
  useEffect(() => {
    const customInterval = setInterval(() => {
      // if(time > 0) setTime((prev) => prev - 1000)
      getTime()
    },1000)
    return () => clearInterval(customInterval)
  },[])

  return {seconds,minutes,hours,days}
}

export default useCountdown