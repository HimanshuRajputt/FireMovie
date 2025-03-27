// import React from "react";
import "../styles/About.css";
import { Footer } from "./Footer";

export const About = () => {
  return (
    <>
      <div className="about-container">
        <h1 className="about-heading">Welcome to Our World</h1>
        <p className="about-description">
          At <span className="about-highlight">FireMovieApp</span>, we are
          passionate about bringing movies closer to you. Our platform provides
          detailed insights into your favorite movies, enabling you to dive
          deeper into the stories, characters, and directors that shape the
          cinematic universe.
        </p>
        <p className="about-mission">
          <strong>Our Mission:</strong> To connect people through the power of
          storytelling and the art of cinema.
        </p>
        <div className="about-values">
          <h2 className="values-heading">Our Values</h2>
          <ul className="values-list">
            <li className="values-item">
              Innovation and creativity in everything we do.
            </li>
            <li className="values-item">
              Building a community of movie enthusiasts.
            </li>
            <li className="values-item">
              Empowering users with accurate and detailed information.
            </li>
          </ul>
        </div>
        <button className="about-button">Discover More</button>
      </div>
        <div>
          <Footer />
        </div>
    </>
  );
};
