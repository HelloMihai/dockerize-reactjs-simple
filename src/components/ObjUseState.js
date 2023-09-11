import { useState } from 'react';

export default function ObjUseState() {
  const [greeting, setGreeting] = useState({ id: 1, nume: 'mihai' }); // default state
  const btnClickHandler = () => {
    setGreeting(greeting => ({ // use setGreeting to update the state
      ...greeting, // keep all prior values
      nume: 'maxwell' // override with new values
    }))
  }
  return (
    <>
      <p>my homey {greeting.nume} has id {greeting.id}</p>
      <button onClick={btnClickHandler}>update state</button>
    </>
  )
}