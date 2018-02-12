import React, {Component} from 'react'
import EventBox from './EventBox'
import {Connect} from 'react-redux'
import {getAllEvents} from '../actions/actions'
import {bindActionCreators} from 'redux'
import { connect } from "react-redux";


const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        getAllEvents
    },dispatch)
}

const mapStateToProps = state =>{
    return {reduxEvents:state.events}
}

class eventObj{
    constructor(obj,eventId){
        let {name,status,users} = obj.data
        this.name = name
        this.status = false
        this.users =[]
    }
}


class EventListBox extends Component{
    constructor(props){
        super(props)
        this.state={events:[]}
    }
    componentWillReceiveProps(newProps){
        this.setState({events:newProps.reduxEvents})
    }

    mapEvents(){
            return this.state.events.map((event,index)=>{
                <EventBox key={event._id} id={event._id} name={event.name}/>
            })
    }
    render(){
        if(!this.state.events){
            return(<div>Nothing Here...</div>)
        }
        return(
            <div className='row'>
                <div className='col m12'>
                {this.state.events.map((city, index) =>
                    //console.log(city)
                    <EventBox key={city._id} id={city._id} name={city.name}/>
                )}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventListBox);
// {this.states.events.map((event)=>{
//     <EventBox key={event._id} id={event._id} name={event.name}/>
// })}