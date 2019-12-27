import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Button from '../styledComponents/StyledHero';

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Your Personal Mountain Escape!"
          subtitle="Come Check Out The Best Priced Rooms in the Area!"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
    </>
  );
};

export default home;

// home page of site