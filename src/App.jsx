import { useState } from 'react'
import './App.css'
import NavBar from './components/ui/NavBar/NavBar'
import EventCard from './components/ui/EventCard'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <EventCard />
    </>
  )
}

export default App;
