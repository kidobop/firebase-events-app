import { useState } from 'react'
import './App.css'
import NavBar from './components/ui/NavBar/NavBar'
import EventCard from './components/ui/EventCard'
import EventsExplorer from './components/ui/EventsExplorer'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <EventCard />
      <EventsExplorer />
    </>
  )
}

export default App;
