import React, { Component } from "react";
import Title from "./Title";
export default class Menu extends Component {

  state = {
    menus: [
      {
        title: "Appetizers",
        info: "Start your meal with these delicious sides to share"
        },

      {
          name: "Loaded Potato Skins",
          description: "Russett Potatos filled with fresh bacon, cheddar cheese and scallions",
          price: "8.95"
        },
        {
        title: "Main Course",
        info: "Try any of these comfort food inspired entrees"
        },
        {
         name: "Pub Burger",
         description: "Third pound burger with L.T.O and sharp cheddar on a house made pretzel bun",
         price: "13.95"
         }
     ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.menus.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                {/* <span>{item.icon}</span> */}
                <h6>{item.title}</h6>
                <p>{item.name}</p>
                <p>{item.info}</p>
                <p>{item.price}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
