import React from 'react';
import {render} from 'react-dom';

import {getProfiles} from '../utils/profilesAPI';

import {AddProfile} from './addProfile.jsx';
import {Profile} from './profile.jsx';

class Profiles extends React.Component {
    constructor ( props ) {
        super (props);
        this.state = {
            profiles: []
        };

        this.addUser = this.addUser.bind(this);
    }

    componentDidMount(){
        getProfiles()
            .then(profiles => {
            this.setState({
                profiles
            })
        })
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
                key={profile.id}
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