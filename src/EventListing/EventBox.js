import React, {Component} from 'react'
import {deleteEvent} from '../actions/actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'


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
            <div className='col s12 m4'>
                <div className='card'>
                    <div className='card-image'>
                        <img src="https://giftagiraffe.com/img/brands/secret-santa.png" alt=""/>
                        <span className="card-title black-text">{this.props.name}</span>
                    </div>
                    <div class="card-content">
                        <div className="card-action">
                            {/*<Link to={`/event/${this.params._id}`}/>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventBox);
