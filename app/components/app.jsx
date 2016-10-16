import React from 'react';
import {render} from 'react-dom';
import {Profiles} from './profiles.jsx';
import {WrappedComp1, WrappedComp2} from './HOC.jsx'




class App extends React.Component {
    render () {
        return (
            <div>
                <h1>Profiles</h1>
                <Profiles/>
                <hr/>
                <WrappedComp1 />
                <WrappedComp2 />
            </div>
        )
    }
}

export {App};