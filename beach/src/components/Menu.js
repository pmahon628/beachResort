import React, { Component } from "react";
import Title from "./Title";
export default class Menu extends Component {

  state = {
    menus: [
      {
        titleA: "Appetizers",
        info: "Start your meal with these delicious sides to share"
        },

      {
          name: "Loaded Potato Skins",
          description: "Russett Potatos filled with fresh bacon, cheddar cheese and scallions",
          price: "8.95"
        },
        {
        titleM: "Main Course",
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
      <section className="menu">
        <Title title="menu" />
        <div className="menu">
          {this.state.menus.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                {/* <span>{item.icon}</span> */}
                <h6>{item.titleA}</h6>
                <h6>{item.titleM}</h6>
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
