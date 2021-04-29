import './Dashboard2.scss'
import EventForm from '../Components/EventForm';
import { postEventDB } from '../services/APIservice';
import { useEffect, useState } from 'react';


function Dashboard2 () {
  
  const [event, setEvent] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/my-events')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setEvent(data)
      })
  }, []) 

  async function postEvent (newEvent) {
    const createEvent = await postEventDB(newEvent);
    setEvent(prevState => [...prevState, createEvent]);
  }

  return (
    <div className='dashboard-container2'>
      <EventForm postEvent={postEvent}/>
    </div>
  )
}

export default Dashboard2
