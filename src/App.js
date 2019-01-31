// LIBRARIES
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// COMPONENTS, PICTURES AND MATERIALS
import FrontPage from './components/frontPage/FrontPage';
import OpenedBook from './components/openedBook/OpenedBook';
import WordsList from './components/wordsList/WordsList';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Settings from './components/settings/Settings';
import Dashboard from './components/dashboard/Dashboard';
import OtherFeatures from './components/otherMenuItems/OtherFeatures';
import Statistics from './components/otherMenuItems/statistics/Statistics';
import Forum from './components/otherMenuItems/forum/Forum';
import About from './components/otherMenuItems/about/About';
import Recomendations from './components/otherMenuItems/recomendations/Recomendations';
import FuturePlans from './components/otherMenuItems/futurePlans/FuturePlans';
import UserStories from './components/otherMenuItems/usertories/UserStories';

import * as dashboardActions from './actions/dashboardActions';

// STYLE
import './App.css';



class App extends Component {
    render() {
        return (
        	<Router>
	            <div id="appWrapper" className="app">
	            	<Route exact path="/" component={FrontPage} />
	                <div className="App">		                
		                <div>		                    
		                    <Route exact path={"/openedBook/"+this.props.selectedBook.url} component={OpenedBook} />
		                    
		                    <Route exact path="/otherFeatures"   component={OtherFeatures} />
		                    <Route exact path="/wordList" 		 component={WordsList} />
		                    <Route exact path="/dashboard" 		 component={Dashboard} />
		                    <Route exact path="/profile" 		 component={Profile} />
		                    <Route exact path="/settings" 		 component={Settings} />

		                    <Route exact path="/otherFeatures/statistics" 	 	 component={Statistics} />
		                    <Route exact path="/otherFeatures/forum" 			 component={Forum} />
		                    <Route exact path="/otherFeatures/about" 			 component={About} />
		                    <Route exact path="/otherFeatures/recomendations"  	 component={Recomendations} />
		                    <Route exact path="/OtherFeatures/futureplans" 		 component={FuturePlans} />
		                    <Route exact path="/OtherFeatures/UserStories" 		 component={UserStories} />
		                
		                </div>
		            </div>               
	            </div>
            </Router>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        selectedBook: state.selectedBook,
    }
}

function mapDispatchToProps(dispatch){
    return{
        dashboardActions: bindActionCreators(dashboardActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);