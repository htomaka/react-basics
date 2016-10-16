import React from 'react';
import {render} from 'react-dom';



// functional stateless component
// use if no need for internal state
let Profile = props => (
    <article>
        <hr/>
        <h3>{props.name}</h3>
        <p>{props.name} is {props.age}
            and {props.bio}</p>
        <h4>Hobbies</h4>
        <ul>
            {props.hobbies.map ((hobby, index) => <li key={index}>{hobby}</li>)}
        </ul>
    </article>
);

Profile.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    hobbies: React.PropTypes.array,
    bio: React.PropTypes.string
};

export {Profile};