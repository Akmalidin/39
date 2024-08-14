import React from "react";
import { Hero } from "./Hero";
import { Event } from "./Event";
import { AboutHome } from "./AboutHome";
import { Galareya } from "./Galareya";
import { AboutHomeTwo } from "./AboutHomeTwo";
import { Our } from "./Our";
import { Personal } from "./Personal";

export const Home = () => {
  return (
    <div>
      <Hero />
      <AboutHome />
      <Event />
      <Our/>
      <Personal/>
      <AboutHomeTwo />
      <Galareya />
    </div>
  );
};
