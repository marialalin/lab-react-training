import './IdCard.css';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  const femaleGender = gender ? "female" : "male"
 
  return (
    <div className="d-flex mb-3">
      <div className="id-card d-flex flex-row">
        <div className="align-self-center ms-1 me-1">
          <img src={picture} alt={firstName} />
        </div>
        <div className="align-self-center">
          <p className="fw-bold">First Name: { firstName }</p>
          <p className="fw-bold">Last Name: { lastName }</p>
          <p className="fw-bold">Gender: { femaleGender }</p>
          <p className="fw-bold">Height: { Number(height)/100 }</p>
          <p className="fw-bold">Birth: {birth.toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
