import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addEventToDB} from '../actions/actions';
import {bindActionCreators} from 'redux';

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addEventToDB
    }, dispatch);
};


const mapStateToProps = state => {
    return { reduxEvents: state.events };
};

class CreatePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                Hello Welcome
                {/*<CreateForm/>*/}
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreatePage)