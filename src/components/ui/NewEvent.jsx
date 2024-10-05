import React from 'react'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

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
                status:Status
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
    <div>
        <form onSubmit={}>
            <input placeholder='Event Name' type="text" value={EventName} onChange={(e)=> setEventName(e.target.value)}/>
            <input placeholder='Date' type="text" value={Date} onChange={(e)=>setDate(e.target.value)}/>
            <input placeholder='Description' type="text" value={Description} onChange={(e)=>setDescription(e.target.value)}/>
            <input placeholder='Venue' type="text" value={Venue} onChange={(e)=>setVenue(e.target.value)}/>
            <label htmlFor="Status">Status</label>
            <label htmlFor=""><input type="radio" name='status' value="ongoing" id="ongoing" checked={Status === 'ongoing'} onChange={(e)=>setStatus(e.target.value)}/>Ongoing</label>
            <label htmlFor=""><input type="radio" name='status' value="upcoming" id="upcoming" checked={Status ==='upcoming'} onChange={(e)=>setStatus(e.target.value)} />Upcoming</label>
            <button>Submit</button>
        </form>


    </div>
  )
}

export default NewEvent