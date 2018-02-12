import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getAllEvents} from './actions/actions';
import {bindActionCreators} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import EventsPage from "./EventListing/EventsPage";
import CreatePage from "./EventCreation/CreatePage";


const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getAllEvents
    }, dispatch);
};


const mapStateToProps = state => {
    return { reduxEvents: state.events };
};

class ConnectedApp extends Component {
    constructor(props) {
        super(props);
        this.state = { events: [{ name: 123, type: "ahlan" }] };
        this.props.getAllEvents();
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={EventsPage}/>
                    <Route path='/create' component={CreatePage}/>
                    {/*<Route path='/event/:eventid' component={SingleEvent}/>*/}
                </Switch>
            </BrowserRouter>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

// export default ConnectedApp;
//

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

