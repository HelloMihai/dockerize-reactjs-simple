import { useState } from 'react'

export default function MyButtonExternalFile() {
  const [count, setCount] = useState(0); // count = cur value, setCount = function to update value, 0 initial value. Can be any name

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button onClick={handleClick}>external file button clicked {count} times</button>
  )
}