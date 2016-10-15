import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
var Profiles = React.createClass ({
    getInitialState: function(){
        return {
            profiles: [
                {name: 'David'},
                {name: 'Sarah'}
            ]
        }
    },
    render: function () {
        return (
            <section>
                <article>
                    <h3>User 1: {this.state.profiles[0].name}</h3>
                </article>
                <article>
                <h3>User 2: {this.state.profiles[1].name}</h3>
                </article>
            </section>
        )
    }
});
var App = React.createClass ({
    render: function () {
        return (
            <div>
                <h1>Profiles</h1>
                <Profiles/>
            </div>
        )
    }
});
ReactDOM.render (
    <App />,
    document.getElementById ('root')
);
