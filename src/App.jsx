import { useState, useEffect } from 'react'
import { Team, Plays } from './data/plays'
import PlaysSource from './comps/Plays'
import Menu from './comps/Menu'
import './style/playbook.css'
export default function App() {
  const [myPlays, setPlayCount] = useState(Plays.length)
  // useEffect(() => { 
  //   setPlayCount(Plays.length)
  // }, [])
  return (
    <>
      <div className="container">
        <section>
          <Menu title="PLAYBOOK" />
        </section>
        <section>
          <h3>{myPlays} play{myPlays >= 2 ? 's' : ''} in library</h3>
          <PlaysSource play={Plays} />
        </section>
      </div>
    </>
  )
}