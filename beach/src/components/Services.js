import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer}
from "react-icons/fa";
import Title from '../components/Title'

export default class Services extends Component {
    state={
        servics: [
       {
        icon:<FaCocktail/>,
        title: "Free Cocktails",
        info:"Every day from 4-5 come enjoy some delicious cocktails at our happy hour"
        },
        {
         icon:<FaHiking/>,
         title:"The Best Hiking around!",
         info: "Come expolore some of the fantastic hikes and trails around!"
        },
        {
         icon:<FaShuttleVan/>,
         title:"Complimentary Shuttle!",
         info:"Free Shuttle, ask the front desk for more details!"
        },
        {
         icon:<FaBeer/>,
         title:"Great local Beer",
         info:"We make our own beers on property, come check out the variety!"
        }
     ]
    }
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
