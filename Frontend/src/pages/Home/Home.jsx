import React from "react";
import { Hero } from "./Hero";
import { Event } from "./Event";
import { AboutHome } from "./AboutHome";
import { Teachers } from "./Teachers";
import { Galareya } from "./Galareya";
import { AboutHomeTwo } from "./AboutHomeTwo";

export const Home = () => {
  return (
    <div>
      <Hero />
      <AboutHome />
      <Event />
      <Teachers />
      <AboutHomeTwo />
      <Galareya />
    </div>
  );
};
