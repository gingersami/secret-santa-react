import React, {Component} from 'react'
import EventBox from './EventBox'
import {Connect} from 'react-redux'
import {getAllEvents} from './actions/actions'
import {bindActionCreators} from 'redux'

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
        // if(!this.state.events){
        //     return(<div>Nothing Here...</div>)
        // }
        return(
            <div className='row'>
            Hello
                {/* {this.mapEvents()} */}
            </div>
        )
    }
}

export default EventListBox