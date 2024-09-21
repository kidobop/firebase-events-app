import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/ui/NavBar/NavBar'
import EventCard from './components/ui/EventCard'
import EventsExplorer from './components/ui/EventsExplorer';
import { db } from "./firebase";
import { getDocs, collection } from 'firebase/firestore';

function App() {
  const [events, setEvents] = useState([]);
  const eventCollectionRef = collection(db, "events");

  useEffect(() => {
    const getEvents = async () => {
      try {
        const querySnapshot = await getDocs(eventCollectionRef);
        const eventsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setEvents(eventsData);
        console.log("Fetched events:", eventsData);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    getEvents();
  }, []);

  return (
    <>
      <NavBar />
      <EventCard />
      {/* You might want to map over your events state here to display EventCards */}
      <EventsExplorer />
    </>
  )
}

export default App;