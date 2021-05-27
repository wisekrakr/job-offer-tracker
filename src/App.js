import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Offers from "./components/Offers";
import AddOffer from "./components/AddOffer";
import About from "./components/About";

function App() {
  const [showAddOffer, setShowAddOffer] = useState(false);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const getOffers = async () => {
      const offersFromServer = await fetchOffers();
      setOffers(offersFromServer);
    };

    getOffers();
  }, []);

  // Get all Job Offers
  const fetchOffers = async () => {
    const res = await fetch("http://localhost:5000/offers");

    return await res.json();
  };

  // Get a single Job Offer
  const fetchOffer = async (id) => {
    const res = await fetch(`http://localhost:5000/offers/${id}`, {
      method: "GET",
    });

    return await res.json();
  };

  // Add a Job Offer
  const addJobOffer = async (offer) => {
    const res = await fetch("http://localhost:5000/offers/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(offer),
    });

    const data = await res.json();

    // Get all offers and add "data" onto it (the new offer)
    setOffers([...offers, data]);
  };

  // Delete a Job Offer
  const deleteOffer = async (id) => {
    await fetch(`http://localhost:5000/offers/${id}`, {
      method: "DELETE",
    });

    setOffers(offers.filter((offer) => offer.id !== id));
  };

  // Set Job Offer to Concluded
  const concludeOffer = async (id) => {
    const offerToConclude = await fetchOffer(id);
    const updatedOffer = {
      ...offerToConclude,
      concluded: !offerToConclude.reminder,
    };

    const res = await fetch(`http://localhost:5000/offers/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedOffer),
    });

    const data = await res.json();

    setOffers(
      offers.map((offer) =>
        offer.id === id ? { ...offer, concluded: !data.concluded } : offer
      )
    );
  };

  // Toggle Job Offer Reminder on/off
  const toggleReminder = async (id) => {
    const offerToToggle = await fetchOffer(id);
    const updatedOffer = {
      ...offerToToggle,
      reminder: !offerToToggle.reminder,
    };

    const res = await fetch(`http://localhost:5000/offers/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedOffer),
    });

    const data = await res.json();

    setOffers(
      offers.map((offer) =>
        offer.id === id ? { ...offer, reminder: !data.reminder } : offer
      )
    );
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddOffer(!showAddOffer)}
          showAddOffer={setShowAddOffer}
          title="Job Offer Tracker"
        />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddOffer && <AddOffer onAdd={addJobOffer} />}
              {offers.length > 0 ? (
                <Offers
                  offers={offers}
                  onDelete={deleteOffer}
                  onConcluded={concludeOffer}
                  onToggle={toggleReminder}
                />
              ) : (
                <p>No Job Offers added</p>
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
