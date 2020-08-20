import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ShowPage from './containers/showPage';
import Posts from './containers/Posts';
import CreatePublication from './containers/CreatePublication';
import ProfilePage from './containers/ProfilePage';
import ViewConnection from './containers/ViewConnection';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/showpage" component={ShowPage} exact />
        <Route path="/posts" component ={Posts} exact/>
        <Route path="/createpublication" component={CreatePublication} exact/>
        <Route path="/profilepage" component={ProfilePage}/>
        <Route path="/viewconnections" component={ViewConnection} exact/>
      </div>
    </Router>
  );
}

export default App;
