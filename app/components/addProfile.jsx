import React from 'react';
import {render} from 'react-dom';

class AddProfile extends React.Component {
    constructor ( props ) {
        super (props);
        this.state = {
            name: '',
            age: '',
            bio: '',
            hobby: ''
        };
        this.handleSubmit = this.handleSubmit.bind (this);
        this.handleName = this.handleName.bind (this);
        this.handleAge = this.handleAge.bind(this);
        this.handleBio = this.handleBio.bind(this);
        this.handleHobby = this.handleHobby.bind(this);
    }

    handleName ( e ) {
        this.setState ({
            name: e.target.value
        })
    }

    handleAge ( e ) {
        this.setState ({
            age: e.target.value
        })
    }

    handleBio ( e ) {
        this.setState ({
            bio: e.target.value
        })
    }

    handleHobby ( e ) {
        this.setState ({
            hobby: e.target.value
        })
    }

    handleSubmit (e) {
        e.preventDefault();
        let newProfile = {
            name: this.state.name,
            bio: this.state.bio,
            age: this.state.age,
            hobbies: [this.state.hobby]
        };
        this.props.addProfile (newProfile);
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Name" onChange={this.handleName}
                       value={this.state.name}/>
                <input type="text" placeholder="age" onChange={this.handleAge}
                       value={this.state.age}/>
                <input type="text" placeholder="bio" onChange={this.handleBio}
                       value={this.state.bio}/>
                <input type="text" placeholder="hobby"
                       onChange={this.handleHobby} value={this.state.hobby}/>
                <button type="submit">Add User</button>
            </form>
        )
    }
}
export {AddProfile}