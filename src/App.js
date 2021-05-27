import {useState} from 'react'

import Header from "./components/Header";
import Offers from "./components/Offers";
import AddOffer from "./components/AddOffer";


function App() {
  const [showAddOffer, setShowAddOffer] = useState(false)
  const [offers, setOffers] = useState([
    {
        id: 1,
        job: "Java developer",
        business: "Cool Blue",
        description: "Low level, HBO, Java, back-end",
        hours: '32 hours',
        salary: '€3.000',
        original_date: "May 16th",
        added_date: "May 20th at 16:00",
        apply_date: "May 22nd at 13:00",
        link:"",
        reminder: false,
        concluded: false
    },
    {
        id: 2,
        job: "React.js developer",
        business: "Cool Blue",
        description: "MIddle level, HBO, React, full stack",
        hours: '40 hours',
        salary: '€3.500',
        original_date: "May 17th",
        added_date: "May 22th at 13:45",
        apply_date: "May 26nd at 17:00",
        link:"",
        reminder: true,
        concluded: false
    }

  ])


  const addJobOffer = (offer) =>{
    const id = Math.floor(Math.random() * 10000) + 1

    const jobOffer = {id, ...offer}
    setOffers([...offers, jobOffer])
  }

  const deleteOffer = (id)=>{
    setOffers(offers.filter((offer) => offer.id !== id))
  }

  const concludeOffer = (id)=>{
    setOffers(offers.map((offer) => offer.id === id ? {...offer, concluded: !offer.concluded} : offer))
  }

  const toggleReminder = (id)=>{
    setOffers(offers.map((offer) => offer.id === id ? {...offer, reminder: !offer.reminder} : offer))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddOffer(!showAddOffer)} showAddOffer={setShowAddOffer} title="Job Offer Tracker"/>
        {showAddOffer && <AddOffer onAdd={addJobOffer}/> }
        {offers.length > 0 ? 
        <Offers 
          offers={offers} 
          onDelete={deleteOffer}
          onConcluded={concludeOffer} 
          onToggle={toggleReminder}
          /> :
         <p>No Job Offers added</p>}
    </div>
  );
}

export default App;
