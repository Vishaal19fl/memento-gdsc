import React from "react";
import "./Community.scss";

import Featured from "../../components/featured/Featured";

import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

function Community() {
  return (
    <div className="home">
      
      
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>Explore Rurals artisans and their products</h1>
            
            <p>
            Rural artisans are the custodians of cultural heritage. These artisans infuse their craftsmanship with the essence of their cultural identity, weaving stories, symbols, and rituals into every creation. From pottery and weaving to carving and painting, each artisanal piece reflects the rich tapestry of traditions and customs unique to their region. Through their artistry, they bridge the past with the present, connecting generations and fostering a sense of belonging and pride in their cultural identity. Join us in promoting Rural craftmanship and satisfying experience for yourself.
            </p>
            
          </div>
          <div className="item">
            <video src="./img/pottery.mp4" controls />
          </div>
        </div>
      </div>
      
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              History of Handicrafts
            </h1>
            
            <p>
            Traditional handicraft products have a storied history deeply intertwined with the cultural fabric of societies worldwide. Dating back to ancient civilizations, artisans have utilized local materials and techniques passed down through generations to create objects of both practical use and artistic expression. From pottery and weaving to metalwork and woodworking, each craft reflects the unique heritage, customs, and values of its originating community. Throughout history, traditional handicrafts have served as a means of preserving cultural identity, transmitting folklore and traditions, and fostering social cohesion. Despite the advent of industrialization and modernization, the allure of traditional handicrafts persists, as they continue to evoke nostalgia, authenticity, and a connection to heritage. Today, these timeless creations remain not only as tangible representations of history but also as symbols of resilience, creativity, and the enduring human spirit.
            </p>
            
     
          </div>
          <div className="item">
            <img
              src="/img/handicraft.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide> */}
    </div>
  );
}

export default Community;
