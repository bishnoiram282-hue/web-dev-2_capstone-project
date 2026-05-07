import { useState } from "react";

function BookingForm({ doctor, onBook }) {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = () => {
    if (!name || !time) {
      alert("Please fill all fields");
      return;
    }

    const booking = {
      doctor: doctor.name,
      patient: name,
      time,
    };

    onBook(booking);
  };

  return (
    <div className="card">
      <h2>Book Appointment</h2>

      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br />

      <select onChange={(e) => setTime(e.target.value)}>
        <option value="">Select Time</option>
        <option>10:00 AM</option>
        <option>12:00 PM</option>
        <option>3:00 PM</option>
      </select>

      <br /><br />

      <button onClick={handleSubmit}>
        Confirm Booking
      </button>
    </div>
  );
}

export default BookingForm;