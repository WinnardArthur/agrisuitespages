import React, { Component } from 'react'
import './style.css'
import UserProfile from '../../components/Userprofile/userprofile'
import Invitation from '../../components/Invitations/invitation'
import PeopleSuggestions from '../../components/PeopleSuggestions/peoplesuggestions'

class ProfilePage extends Component {
    render() {
        return (
            <div className="profilePage">
                <div className="contents">
                    <UserProfile/>
                    <div style={{width: "50%"}}>
                        <Invitation/>
                        <PeopleSuggestions/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfilePage
