import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase"; // Adjust this path as necessary

const EventsExplorer = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Component mounted");
    const fetchEvents = async () => {
      try {
        console.log("Fetching events...");
        const eventsCollection = collection(db, 'events');
        const eventSnapshot = await getDocs(eventsCollection);
        const eventList = eventSnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            date: data.date?.toDate?.().toLocaleDateString() || 'No date'
          };
        });
        console.log("Fetched events:", eventList);
        setEvents(eventList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events: ", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = events.filter(event => 
    filter === 'all' || event.status === filter
  );

  if (error) {
    return <div className="text-center mt-8 text-red-600">Error: {error}</div>;
  }

  if (loading) {
    return <div className="text-center mt-8">Loading events...</div>;
  }

  console.log("Rendering component with events:", events);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Explore Events</h2>
      
      <div className="mb-6">
        <label htmlFor="filter" className="mr-2">Filter:</label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded p-2"
        >
          <option value="all">All Events</option>
          <option value="upcoming">Upcoming</option>
          <option value="ongoing">Ongoing</option>
        </select>
      </div>

      {filteredEvents.length === 0 ? (
        <div className="text-center">No events found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredEvents.map(event => (
            <div key={event.id} className="border rounded-lg p-4 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span className={`capitalize ${
                  event.status === 'ongoing' ? 'text-green-600' : 'text-blue-600'
                }`}>
                  {event.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsExplorer;