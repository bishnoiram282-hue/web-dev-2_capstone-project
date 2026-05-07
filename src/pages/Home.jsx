import { useState } from "react";
import { doctors } from "../data";
import DoctorCard from "../components/DoctorCard";
import BookingForm from "../components/BookingForm";

function Home() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleBooking = (booking) => {
    const old =
      JSON.parse(localStorage.getItem("appointments")) || [];

    localStorage.setItem(
      "appointments",
      JSON.stringify([...old, booking])
    );

    alert("✅ Appointment Booked!");
    setSelectedDoctor(null);
  };

  return (
    <div style={{ paddingBottom: "80px" }}>
      {/* Header */}
      <div className="header">
        <h1>🩺 MEDICARE PLUS</h1>
        <p>Your Smart Healthcare Partner</p>
      </div>

      {/* Stats */}
      <div className="grid">
        <div className="card">
          <h2>50+</h2>
          <p>Happy Patients</p>
        </div>

        <div className="card">
          <h2>10+</h2>
          <p>Expert Doctors</p>
        </div>

        <div className="card">
          <h2>24/7</h2>
          <p>Emergency Support</p>
        </div>
      </div>

      {/* Doctors / Booking */}
      {selectedDoctor ? (
        <BookingForm
          doctor={selectedDoctor}
          onBook={handleBooking}
        />
      ) : (
        <div className="grid">
          {doctors.map((doc) => (
            <DoctorCard
              key={doc.id}
              doctor={doc}
              onSelect={setSelectedDoctor}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;