import { useEffect, useState } from "react";

function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("appointments")) || [];

    setAppointments(data);
  }, []);

  const handleDelete = (index) => {
    const updated = appointments.filter(
      (_, i) => i !== index
    );

    localStorage.setItem(
      "appointments",
      JSON.stringify(updated)
    );

    setAppointments(updated);
  };

  return (
    <div style={{ paddingBottom: "80px" }}>
      <div className="header">
        <h1>📅 Appointment Dashboard</h1>
      </div>

      {appointments.length === 0 && (
        <h3 style={{ textAlign: "center" }}>
          No appointments booked
        </h3>
      )}

      <div className="grid">
        {appointments.map((a, i) => (
          <div key={i} className="card">
            <h2>🩺 {a.doctor}</h2>
            <p>👤 {a.patient}</p>
            <p>⏰ {a.time}</p>

            <button onClick={() => handleDelete(i)}>
              Cancel Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;