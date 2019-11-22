import React, { Component} from 'react';
import { RoomContext } from "./context";
// import Loading from "./Loading";
// import Room from './Room';
import Title from '.';
 
export default class FeaturedRooms extends Component{
    static contextType = RoomContext
    render(){
        const{loading, FeaturedRooms : rooms} = 
        this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room}
     })
           
         return(
            <section className="featured-rooms">
                <Title title="featured-rooms"/>
                <div  className="featured-rooms-center">
                {}
                </section>
            </div>
        );
    }
}