import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

const EventsExplorer = () => {
  const [filter, setFilter] = useState('all');

  const events = [
    { id: 1, name: 'Tech Conference 2024', date: '2024-10-15', status: 'upcoming' },
    { id: 2, name: 'Annual Charity Run', date: '2024-09-20', status: 'upcoming' },
    { id: 3, name: 'Summer Music Festival', date: '2024-07-01', status: 'ongoing' },
    { id: 4, name: 'Art Exhibition', date: '2024-08-05', status: 'ongoing' },
    { id: 5, name: 'Startup Pitch Competition', date: '2024-11-30', status: 'upcoming' },
    { id: 6, name: 'Food and Wine Expo', date: '2024-09-10', status: 'upcoming' },
  ];

  const filteredEvents = events.filter(event => 
    filter === 'all' || event.status === filter
  );

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
    </div>
  );
};

export default EventsExplorer;