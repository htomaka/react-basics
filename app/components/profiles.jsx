import React from 'react';
import {render} from 'react-dom';
import {AddProfile} from './addProfile.jsx';
import {Profile} from './profile.jsx';

class Profiles extends React.Component {
    constructor ( props ) {
        super (props);
        this.state = {
            profiles: [
                {
                    name: 'David',
                    age: '40',
                    hobbies: ['programming', 'drawing'],
                    bio: 'enjoys drawing and programming'
                },
                {
                    name: 'Sarah',
                    age: '23',
                    hobbies: ['swimming', 'shopping'],
                    bio: 'enjoys swimming and shopping'
                },
            ]
        };

        this.addUser = this.addUser.bind(this);
    }

    addUser (newProfile) {
        console.log(newProfile);
        this.setState({
            profiles : this.state.profiles.concat([newProfile])
        });
    }

    render () {
        let profiles = this.state.profiles.map (profile => {
            return (<Profile
                name={profile.name}
                age={profile.age}
                hobbies={profile.hobbies}
                bio={profile.bio}
            />)
        });
        return (
            <section>
                {profiles}
                <AddProfile addProfile={this.addUser}/>
            </section>
        )
    };
}

export {Profiles};