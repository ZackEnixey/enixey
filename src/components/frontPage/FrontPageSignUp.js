import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//actions
import * as usersActions from '../../actions/usersActions';

let listOfUsers = [ 
	{'username': 'demo', 'password': 'demo'},
	{'username': 'Zack', 'password': 'Zack'},
	{'username': 'Enixey', 'password': 'Enixey'},
	{'username': 'abba', 'password': 'abba'},
]

class FrontPageSignUp extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
		    userName: '',
		    password: '',
		    currentMode: 'logIn',
		    redirect: false,
      	};
	    this.handleSubmitLogIn = this.handleSubmitLogIn.bind(this);
	    this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this);
	    this.handleChangeUserName = this.handleChangeUserName.bind(this);
	    this.handleChangePassword = this.handleChangePassword.bind(this);
	}

	handleChangeUserName (event) {
		this.setState({ userName: event.target.value });
	}
	
	handleChangePassword(event){	
		this.setState({ password: event.target.value });
	}

	handleSubmitLogIn(event) {
		var me = this;

		var userExists = this.props.listOfUsers.find( function( user ) { 
		    return user['username'] === me.state.userName;
		} );

		if( userExists ) {
			console.log("yes username");

			var passwordExists = this.props.listOfUsers.find( function( user ) { 
			    return user['password'] === me.state.password;
			} );

			if(passwordExists){
				console.log('yes username yes password')
				this.setState({  redirect: true  })
			}else{
				alert("Wrong Password. Try again.");
				console.log("yes username no  password");
			}			
		}else{
			console.log("no username");
			this.setState({ currentMode: 'signUp' })
			this.force
		}

	}

	handleSubmitSignUp(event){
		var me = this;
		if(this.state.userName.length < 3 || this.state.userName < 3){
			alert("username and password have to have at least 3 characters!");
		}else{ 

			var userExists = this.props.listOfUsers.find( function( user ) { 
			    return user['username'] === me.state.userName;
			} );

			if(!userExists){
				this.props.usersActions.addNewUser(this.state.userName, this.state.password);
				this.setState({ currentMode: 'logIn' });
			}else{
				alert("this name exists");
			}		
		}
	}

	switchLogInSignUp(){
		if(this.state.currentMode === 'logIn'){ 
			this.setState({ currentMode: 'signUp' })
		}else{
			this.setState({ currentMode: 'logIn' })
		}
	}


    render() {
    	if (this.state.redirect) {
		    return <Redirect to="/dashboard" />;
		}else { 
	        return ( 
	            <div id="frontPageWrapper" >
		          		
	            	<div className="center positioningParentDiv" >

	            		<div className="signUpSquaresDimentions positioningChildDiv">
	            			<div id="logInInputForm" className="logInForm">
						        <div>
						          	<div className="logInInputFormText"> Username: </div>
						          	<div>	 <input className="logInInputForm" type="text" name="username" value={this.state.userName} onChange={this.handleChangeUserName} /> </div>
						        	<div className="logInInputFormText"> Password: </div>
						          	<div>	 <input className="logInInputForm" type="text" name="password" value={this.state.password} onChange={this.handleChangePassword} /> </div>
						        </div>
						        {this.state.currentMode === 'logIn' ?
						        		<button type="submit" onClick={() => this.handleSubmitLogIn()} className="logInInputFormButton webAppGreenColorForBackground">LOG IN</button>
						        	:
						        		<button type="submit" onClick={() => this.handleSubmitSignUp()} className="logInInputFormButton webAppGreenColorForBackground">SIGN UP</button>
						        }
						      </div>
	            		</div>

	            		<div className="signUpSquaresDimentions positioningChildDiv backgroundColorBlue signUpText fontFamily">
		            		{this.state.currentMode === 'logIn' ? 
			            		<div className="logInForm">
			            			<div className="logInTextTitle"> Enixey </div>
			            			<div className="marginTopTen"> The WebApp for privatisation of vocabulary. Learn what matters, study pragmatically! </div>
		      				        <div className="marginTopTen"> Don't have an account? Do not hessitate, make one right now. </div>
		      				        <input  onClick={() => this.switchLogInSignUp()} id="logInInputFormButton" type="submit" value="SIGN UP" className="logInInputFormButton webAppWhiteColorForBackground" />
			            		</div>
			            		:
			            		<div className="logInForm">
			            			<div className="logInTextTitle"> Enixey </div>
			            			<div className="marginTopTen"> The WebApp for privatisation of vocabulary. Learn what matters, study pragmatically! </div>
		      				        <div className="marginTopTen"> Don't look any further! Boost your words absorbtion to the maximum. </div>
			            			<input  onClick={() => this.switchLogInSignUp()} id="logInInputFormButton" type="submit" value="LOG IN" className="logInInputFormButton webAppWhiteColorForBackground" />
			            		</div>
		            		}
	            		</div>

	            	</div>

	            </div>
	        );
	    }
    }
}

function mapStateToProps(state, ownProps){
    return {
        listOfUsers: state.listOfUsers,
    }
}

function mapDispatchToProps(dispatch){
    return{
        usersActions: bindActionCreators(usersActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPageSignUp);
