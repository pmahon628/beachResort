import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Come join us for happy hour craft cocktails in the lobby from 5 - 7 PM everyday!"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "We are surrounded by over twenty five miles of amazing trails and hikes!"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Need a lift into town, the airport?  Call the front desk to arrange shuttle transport"
      },
      {
        icon: <FaBeer />,
        title: "Homeade Beer",
        info:
          "We have a brewery on site that makes five different kinds of beer.  Come and enjoy."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

// component that has various services the property offers. set the state with the 
// different items and then pass them using the span below.
