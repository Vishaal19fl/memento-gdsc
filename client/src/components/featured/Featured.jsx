import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="featured">
      <video autoPlay muted loop playsInline className="background-video">
        <source src="./img/pottery.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        <div className="left">
        <h1>Discover Cultural Treasures with Memento.</h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder='Try "Pottery"'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular  :</span>
            <button>Pottery</button>
            <button>Jewels</button>
            <button>Bangles</button>
            <button>Earrings</button>
          </div>
        </div>
        {/* <div className="right">
                <img src="https://pngimg.com/d/elon_musk_PNG16.png" alt="" />
            </div> */}
      </div>
    </div>
  );
}

export default Featured;
