import React from 'react';
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Menu from "../components/Menu";

const Restaurant = () => {
    return (
      <>
        <Hero>
          <Banner
            title="Voted Top Burgers"
            subtitle="Come check out the best food on the mountain"
          >
              <Link to="/" className="btn-primary">
            return home
          </Link>
             </Banner>
        </Hero>
        < Menu />
        </>
    );
  };
  
  export default Restaurant;
