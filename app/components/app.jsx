import React from 'react';
import {render} from 'react-dom';
import {Profiles} from './profiles.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <h1>Profiles</h1>
                <Profiles/>
            </div>
        )
    }
}

export {App};