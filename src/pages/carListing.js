// src/pages/carListing.js
import { useState, useEffect } from "react";
import CarCard from "../components/CarCard";
import "./carListing.css";

function Cars() {
  const [cars, setCars] = useState([]); // state to hold cars from API
  const [filter, setFilter] = useState("All"); // state to hold current filter
  const [loading, setLoading] = useState(true); // state to show loading status
  const [error, setError] = useState(null); // state to store fetch error

  useEffect(() => {
    async function fetchCars() {
      try {
        const res = await fetch("http://localhost:5000/api/cars");

        // if backend returned 404/500 etc
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`HTTP ${res.status} - ${text}`);
        }

        const data = await res.json();
        console.log("Cars from API:", data);

        setCars(Array.isArray(data) ? data : data.cars ?? []);
        setLoading(false);
      } catch (err) {
        console.error("Fetch cars error:", err);
        setError(err.message);
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  // Apply filter on cars from API
  const filteredCars =
    filter === "All" ? cars : cars.filter((car) => car.type === filter);

  // Show loading message
  if (loading) {
    return <p>Loading cars...</p>;
  }

  // Show error message
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="page">
      <h1>Available Cars</h1>

      <div className="filters">
        <label>Filter by type: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>Economy</option>
          <option>Luxury</option>
          <option>SUV</option>
        </select>
      </div>

      <div className="car-grid">
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}

export default Cars;
