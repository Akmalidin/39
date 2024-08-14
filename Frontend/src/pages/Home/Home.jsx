import React from "react";
import { Hero } from "./Hero";
import { Event } from "./Event";
import { AboutHome } from "./AboutHome";
import { Teachers } from "./Teachers";
import { Galareya } from "./Galareya";
import { AboutHomeTwo } from "./AboutHomeTwo";
import { Our } from "./Our";

export const Home = () => {
  return (
    <div>
      <Hero />
      <AboutHome />
      <Event />
      <Our/>
      <Teachers />
      <AboutHomeTwo />
      <Galareya />
    </div>
  );
};
