import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/ui/NavBar/NavBar'
import EventCard from './components/ui/EventCard'
import EventsExplorer from './components/ui/EventsExplorer';

function App() {

  return (
    <>
      <NavBar />
      <EventCard />
      <EventsExplorer />
    </>
  )
}

export default App;