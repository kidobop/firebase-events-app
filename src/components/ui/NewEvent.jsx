import React, { useState, useEffect } from 'react'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const NewEvent = () => {
    const [EventName,setEventName]=useState('');
    const [Date,setDate]=useState('');
    const [Description,setDescription]=useState('');
    const [Venue,setVenue]=useState('');
    const [Status,setStatus]=useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db,"events"),{
                name:EventName,
                date:Date,
                description:Description,
                venue:Venue,
                status:Status,
                posted:serverTimestamp()
            })
            console.log("Document written with ID: ", docRef.id);
            setEventName('');
            setDate('');
            setDescription('');
            setVenue('');
            setStatus('');
        } catch (error) {
            console.log(error);
            
        }
        
    }


    return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
    <form onSubmit={handleSubmit} className="space-y-6">
        <div>
            <label htmlFor="eventName" className="block text-sm font-semibold text-gray-700 mb-1">Event Name</label>
            <input 
                placeholder='Event Name' 
                type="text" 
                value={EventName} 
                onChange={(e) => setEventName(e.target.value)} 
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 font-bold font-roboto"
            />
        </div>
        <div>
            <label htmlFor="eventName" className="block text-sm font-semibold text-gray-700 mb-1">Date</label>
            <input 
                placeholder='Date' 
                type="date" 
                value={Date} 
                onChange={(e) => setDate(e.target.value)} 
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 font-bold font-roboto"
            />
        </div>
        <div>
            <label htmlFor="eventName" className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
            <input 
                placeholder='Description' 
                type="text" 
                value={Description} 
                onChange={(e) => setDescription(e.target.value)} 
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 font-bold font-roboto"
            />
        </div>
        <div>
            <label htmlFor="eventName" className="block text-sm font-semibold text-gray-700 mb-1">Venue</label>
            <input 
                placeholder='Venue' 
                type="text" 
                value={Venue} 
                onChange={(e) => setVenue(e.target.value)} 
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 font-bold font-roboto"
            />
        </div>
        <div>
            <label htmlFor="eventName" className="block text-sm font-semibold text-gray-700 mb-1">Status</label>
            <label htmlFor="Status" className="block text-sm font-bold text-gray-700 font-roboto">Status</label>
            <div className="flex space-x-4 mt-2">
                <label htmlFor="ongoing" className="flex items-center">
                    <input 
                        type="radio" 
                        name='status' 
                        value="ongoing" 
                        id="ongoing" 
                        checked={Status === 'ongoing'} 
                        onChange={(e) => setStatus(e.target.value)} 
                        className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    Ongoing
                </label>
                <label htmlFor="upcoming" className="flex items-center">
                    <input 
                        type="radio" 
                        name='status' 
                        value="upcoming" 
                        id="upcoming" 
                        checked={Status === 'upcoming'} 
                        onChange={(e) => setStatus(e.target.value)} 
                        className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    Upcoming
                </label>
            </div>
        </div>
        
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md font-bold font-roboto">
            Submit
        </button>
    </form>
</div>
  )
}

export default NewEvent