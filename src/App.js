import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ShowPage from './containers/showPage';
import Posts from './containers/Posts';
import CreatePublication from './containers/CreatePublication';
import ProfilePage from './containers/ProfilePage';
import ViewConnection from './containers/ViewConnection';
import ViewGroup from './containers/ViewGroup';
import PagesDisplay from './containers/PagesDisplay';
import ConnectedProfile from './containers/ConnectedProfile';
import OwlProfile from './containers/OwnProfile';
import ToConnectWith from './containers/ToConnectWith';
import SettingDashboard from './containers/SettingDashboard';
import SettingDashboardNotifications from './containers/SettingDashboardNotificationsPage';
import SettingDashboardPrivacy from './containers/SettingDashboardPrivacyPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/showpage" component={ShowPage} exact />
        <Route path="/posts" component ={Posts} exact/>
        <Route path="/createpublication" component={CreatePublication} exact/>
        <Route path="/profilepage" component={ProfilePage}/>
        <Route path="/viewconnections" component={ViewConnection} exact/>
        <Route path="/viewgroup" component={ViewGroup} exact/>
        <Route path="/pagesdisplay" component={PagesDisplay} exact/>
        <Route path="/connected-profile" component={ConnectedProfile} exact/>
        <Route path="/own-profile" component={OwlProfile} />
        <Route path="/to-connect-with" component={ToConnectWith} />
        <Route path="/setting-dashboard" component={SettingDashboard} />
        <Route path="/setting-dashboard-notifications" component={SettingDashboardNotifications} />
        <Route path="/setting-dashboard-privacy" component={SettingDashboardPrivacy} />
      </div>
    </Router>
  );
}

export default App;
