import React from 'react';
import {render} from 'react-dom';

class AddProfile extends React.Component {
    render(){
        return(
            <button onClick={this.props.addProfile}>Add User</button>
        )
    }
}

export {AddProfile}