import React, { Component } from 'react'
import './style.css'
import UserProfile from '../../components/Userprofile/userprofile'
import Invitation from '../../components/Invitations/invitation'
import PeopleSuggestions from '../../components/PeopleSuggestions/peoplesuggestions'
import Adds from '../../components/Adds/adds'
import TrendingNews from '../../components/TrendingNews/trendingnews'
import RecommendedPages from '../../components/RecommendedPages/recommendedpages'

class ProfilePage extends Component {
    render() {
        return (
            <div className="profilePage">
                <h1 style={{textAlign: "center", fontWeight: "500",marginBottom: "1rem"}}><span style={{color: "red"}}><u>line of ads</u></span> passes here:advertising a company</h1>
                <div className="contents">
                    <div className="column1">
                        <UserProfile/>
                    </div>
                    <div className="column2">
                        <Invitation/>
                        <PeopleSuggestions/>
                        <TrendingNews/>
                        <RecommendedPages/>
                    </div>
                    <div className="column3">
                        <Adds/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfilePage
