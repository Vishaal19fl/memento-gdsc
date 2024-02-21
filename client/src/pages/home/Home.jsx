import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Featured />
      {/* <TrustedBy /> */}
      <div className="slide-title">
        <h2>Categories</h2>
      </div>
      <Slide slidesToShow={5} arrowsScroll={1}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
        <div className="item">
    <h1>Discover Traditional Crafts from Rural Artisans</h1>
    <div className="title">
        Explore Handcrafted Products from Artisans Nationwide
    </div>
    <p>
        Discover a diverse range of authentic and high-quality traditional crafts from artisans across the country.
    </p>
    <div className="title">
    Sustainable Packaging Solutions
</div>
<p>
     Our packaging solutions are 100% plastic-free, designed to minimize environmental impact and contribute to a sustainable future. 
</p>

    <div className="title">
        Secure Transactions, Every Time
    </div>
    <p>
        Shop with confidence knowing that your payment is secure. Payments are secured by Google Pay.
    </p>
    <div className="title">
    Greener Planet on Every Purchase
</div>
<p>
   As part of our commitment to the planet, we include a special surprise in every package - <strong> A Seed pod </strong>which can be planted easily. 
</p>

</div>

          <div className="item">
            <video src="/img/video1.mp4" autoPlay muted loop playsInline />
          </div>
        </div>
      </div>
      <div className="features dark">
      <div className="container">
    <div className="item">
        <h1>Monthly Subscription Plans</h1>
        <button className="btn1">Subscribe Now</button>
    </div>
    <div className="item">
        <h1>
            Subscribe and Receive Monthly Rural Artisan Products
        </h1>
        <p>
            Upgrade to a curated monthly experience filled with handcrafted products from rural artisans, delivered right to your doorstep.
        </p>
        <div className="title">
            <img src="./img/check.png" alt="" />
            Discover a Wide Range of Authentic Artisan Products
        </div>
        <div className="title">
            <img src="./img/check.png" alt="" />
            Curated Selections from Featured Artists
        </div>
        <div className="title">
            <img src="./img/check.png" alt="" />
            Enjoy Convenient Monthly Deliveries with Hassle-Free Shipping
        </div>
    </div>
</div>

      </div>
      <div className="features">
        <div className="container">
        <div className="item">
    <h1>
        Explore Rural Artisan Products with Memento's AR Tech
    </h1>
   
    <p>
        Upgrade to a revolutionary experience powered by augmented reality (AR) technology, allowing you to visualize artisan products in your home environment before making a purchase.
    </p>
    {/* <div className="title">
        <img src="./img/check.png" alt="" />
        Connect with Skilled Artisans and Experienced Freelancers
    </div>
    <div className="title">
        <img src="./img/check.png" alt="" />
        Receive Personalized Assistance from a Dedicated Customer Success Manager
    </div>
    <div className="title">
        <img src="./img/check.png" alt="" />
        Enhance Collaboration and Productivity with our Advanced Workspace Tools
    </div> */}
    <br></br>
    <Link to="/gigs?search="><button className="btn1">Explore Products in AR</button></Link>
    
</div>

          <div className="item">
            <video className="arvideo" src="/img/arvideo6.mp4" autoPlay muted loop playsInline></video>
          </div>
        </div>
      </div>
      <div className="slide-title2">
        <h2>Featured Products</h2>
      </div>
      <Slide slidesToShow={4} arrowsScroll={1}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
