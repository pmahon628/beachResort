import React, { Component } from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer}
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
        }
        {
         icon:<FaBeer/>,
         title:""
        }
     ]
    }
    redner(){
        return(
            <div>
                <Title title="services"/>

                </Title>
            </div>
        )
    }
}
