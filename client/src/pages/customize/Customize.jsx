import React, { useState } from "react";
import "./Customize.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

function Customize() {
  
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      navigate("/gig/65c8a18ba3b0b1d649924ac5")
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Personalize your product</h1>
        <label htmlFor="">Name</label>
        <input
          name="username"
          type="text"
          placeholder="Enter your name"
          
        />

        
        <button type="submit">Submit</button>
        {error && error}
      </form>
    </div>
  );
}

export default Customize;
