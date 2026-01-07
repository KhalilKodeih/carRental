// src/pages/carDetails.js
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BookingForm from "../components/BookingForm";
import "./cardetails.css";

function CarDetails() {
  const { id } = useParams();

  const [car, setCar] = useState(null); // state to hold car from API
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCar() {
      try {
        const res = await fetch(`http://localhost:5000/api/cars`);

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`HTTP ${res.status} - ${text}`);
        }

        const data = await res.json();
        console.log("All cars from API:", data);

        // convert id to number for comparison
        const carId = Number(id);

        // find the specific car from API array
        const found = data.find((c) => c.id === carId);

        setCar(found || null);
        setLoading(false);
      } catch (err) {
        console.error("Fetch car error:", err);
        setError(err.message);
        setLoading(false);
      }
    }

    fetchCar();
  }, [id]);

  if (loading) {
    return <p>Loading car details...</p>;
  }

  if (error) {
    return (
      <section className="page">
        <h1>Error loading car</h1>
        <p>{error}</p>
        <Link to="/cars" className="btn">
          Back to cars
        </Link>
      </section>
    );
  }

  if (!car) {
    return (
      <section className="page">
        <h1>Car not found</h1>
        <Link to="/cars" className="btn">
          Back to cars
        </Link>
      </section>
    );
  }

  // Convert base64 image to usable URL
  const imageSrc = `data:image/jpeg;base64,${car.image_base64}`;

  return (
    <section className="page car-details">
      <div className="car-details__info">
        <img src={imageSrc} alt={car.name} />

        <div>
          <h1>{car.name}</h1>

          <p>{car.description}</p>

          <ul>
            <li>Type: {car.brand}</li>
            <li>Model: {car.model}</li>
            <li>status: {car.status}</li>
            <li>Year: {car.year}</li>
            <li>Price: {car.price_per_day}</li>
          </ul>

          <p className="car-details__price">${car.price_per_day} / day</p>
        </div>
      </div>

      <BookingForm carName={car.name} />
    </section>
  );
}

export default CarDetails;
