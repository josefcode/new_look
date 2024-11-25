import React from "react";
import "./Banner.scss";
export const Banner = () => {
  return (
    <section className="banner-container">
      <div className="banner-wrapper">
        <h1>Software Development Expert</h1>
        <img
          src="https://images.pexels.com/photos/6109581/pexels-photo-6109581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="image"
          width={300}
        />
      </div>
    </section>
  );
};
