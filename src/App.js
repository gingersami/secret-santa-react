import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getAllEvents } from './actions/actions'
import { bindActionCreators } from 'redux'
import EventListBox from './EventListBox'

const mapDispatchToProps = dispatch => {

  return bindActionCreators({
    getAllEvents
  }, dispatch);
}

const mapStateToProps = state => {
  return { reduxEvents: state.events }
}

class connectedApp extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  render() {
    return (
      <div className='app'>
        <div className='container'>
        <EventListBox/>
        </div>
      </div>
    )
  }

}

export default connectedApp;






  // addEvent = (events)=>{
  //   this.state({events:events})
  // }

  // _getIndexByid = (id) =>{
  //   let {cities} = this.state
  //   for(let i=0;i< cities.length;i++){
  //     if(cities[i]._id === id){
  //       return i
  //     }
  //   }
  // }

//   deleteCity=(id)=>{
//     let index = this._getIndexByid(ids.eventId);
//     let temp = this.state.events
//     temp.splice(index,1);
//     this.setState({events:temp})
//   }

