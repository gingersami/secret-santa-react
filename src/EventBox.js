import React, {Component} from 'react'
import {deleteEvent} from './actions/actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        deleteEvent
    },dispatch)
}

const mapStateToProps = state =>{
    return {reduxEvents:state.events}
};



class EventBox extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='col m6'>
                <div className='card-content'>
                    {/*<span className='card-title grey-text text-darken-4'>{this.state.name}</span>*/}
                    <img className='activator' src='#'/>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventBox);
