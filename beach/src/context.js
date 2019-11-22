import React, { Component } from 'react'
import items from './data'
const RoomContext = React.createContext();

export default class RoomProvider extends Component {
state={
    rooms: [],
    sortedRooms:[],
    featuredRooms:[],
    loading: true
};
// getData

componentDidMount(){
    let rooms = this.formatData(items)
    let featuredRooms = rooms.filter(room = room.featured
        === true);
    this.setState({
        rooms, 
        featuredRooms,  
        sortedRooms:rooms,
        loading: false
    });
   }

formatData(items){
    // this.getData
 let tempItems  = items.map(item =>{
    let id  = item.sys.id
    let images = item.fields.images.map(image => 
            image.fields.files.url);

    let rooms = {...item.fields,images,id}
    return rooms; 
    });
}

render(){
        return <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
        </RoomContext.Provider>
        );
      }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};