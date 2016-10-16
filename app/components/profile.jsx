import React from 'react';
import {render} from 'react-dom';

class Profile extends React.Component {
    render () {
        let hobbies = this.props.hobbies.map (hobby => {
            return <li>{hobby}</li>
        });
        return (
            <article>
                <hr/>
                <h3>{this.props.name}</h3>
                <p>{this.props.name} is {this.props.age}
                    and {this.props.bio}</p>
                <h4>Hobbies</h4>
                <ul>
                    {hobbies}
                </ul>
            </article>
        )
    }
}

export {Profile};