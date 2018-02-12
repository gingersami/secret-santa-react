import React, {Component} from 'react'
import EventListBox from './EventListBox';
import '../App.css';
import {connect} from 'react-redux';
import {getAllEvents} from '../actions/actions';
import {bindActionCreators} from 'redux';

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getAllEvents
    }, dispatch);
};


const mapStateToProps = state => {
    return { reduxEvents: state.events };
};

class EventsPage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='container'>
                <EventListBox/>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EventsPage)