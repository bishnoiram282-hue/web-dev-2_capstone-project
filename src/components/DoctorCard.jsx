function DoctorCard({ doctor, onSelect }) {
  return (
    <div className="card">
      <div
        style={{
          fontSize: "50px",
          background: "#dbeafe",
          width: "80px",
          height: "80px",
          margin: "auto",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        🩺
      </div>

      <h2>{doctor.name}</h2>
      <p>{doctor.specialization}</p>
      <p>{doctor.rating}</p>

      <button onClick={() => onSelect(doctor)}>
        Book Appointment
      </button>
    </div>
  );
}

export default DoctorCard;