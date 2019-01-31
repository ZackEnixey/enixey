import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components, photos and material
import Header from '../header/Header';
import TextGeneratorDEMO from '../openedBook/TextGeneratorDEMO';
import profilePhoto from '../images/profilePhoto.png';
import SelectFormComponent from './SelectFormComponent';

//actions
import * as profileActions from '../../actions/profileActions';

var editGenresData = []
var editNameData = '';
var editLastNameData = '';
var editUsernameData = '';
var editEmailData = '';
var editLanguageData = '';

class Profile extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	profileMode: 'wall',
	    	newNote: {
	    		noteTitle: '',
				noteBody: '',
			},
		    currentHeight: document.documentElement.clientHeight,
	    };
	    this.resize = this.resize.bind(this);
	    this.onNoteTitleChange = this.onNoteTitleChange.bind(this);
	    this.onNoteBodyChange = this.onNoteBodyChange.bind(this);
	    this.newDescriptionValues = this.newDescriptionValues.bind(this);
	    this.selectGenres = this.selectGenres.bind(this);
	}

	resize() {
    	this.setState({
    		currentHeight: document.documentElement.clientHeight
    	})
	}

	componentDidMount() {
		window.addEventListener('resize', this.resize)
		console.log('did');
	}

	componentWillUnmount() {
	  	window.removeEventListener('resize', this.resize)
	  	console.log('will');
	}

	switchProfileMode(profileModeValue) {
		this.setState({
			profileMode: profileModeValue
		})
	}

	getCurrentDate(){
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();

		if(dd<10) { dd = '0'+dd } 

		if(mm<10) { mm = '0'+mm } 

		today = mm + '/' + dd + '/' + yyyy;
		return today;
	}

	getCurrentTime(){
		var time = new Date();
		time = time.getHours() + ":" + time.getMinutes();
		return time;
	}

	addNewNote(){
		 this.props.profileActions.addNewNote( {'id': '6', 'state': 'A', 'title': this.state.newNote.noteTitle, 'content': this.state.newNote.noteBody, 'date': this.getCurrentDate(), 'time': this.getCurrentTime(), 'userId': '2'} );
	}

	newDescriptionValues(event){

		if(event.target.id === 'nameprofileEdit'){
			editNameData = event.target.value;

		}else if(event.target.id === 'lastNameprofileEdit'){
			editLastNameData = event.target.value;

		}else if(event.target.id === 'usernameprofileEdit'){
			editUsernameData = event.target.value;

		}else if(event.target.id === 'emailprofileEdit'){
			editEmailData = event.target.value;

		}else if(event.target.id === 'languageprofileEdit'){
			editLanguageData = event.target.value;

		}

	}

	selectGenres(selectedGenres){
		console.log(selectedGenres);
		editGenresData = selectedGenres;
		editGenresData.push({value: "mystery", label: "Mystery"});
	}

	editCurrentDescription(){

		if(editEmailData.includes('@') && editEmailData.includes('.com')){
			if(editGenresData.length === 0){ 
				this.props.profileActions.editCurrentDescription( {'id': '0', 'state': 'A', 'name': editNameData, 'lastName': editLastNameData, 'username': editUsernameData, 'email': editEmailData, 'bookJanre': [{value: "mystery", label: "Mystery"}], 'language': editLanguageData} );
			}else{ 
				this.props.profileActions.editCurrentDescription( {'id': '0', 'state': 'A', 'name': editNameData, 'lastName': editLastNameData, 'username': editUsernameData, 'email': editEmailData, 'bookJanre': editGenresData, 'language': editLanguageData} );
			}
				this.switchProfileMode('wall');
		}else{
			alert("please enter valid eMail");
		}
	}

	onNoteTitleChange(event){
		const newNoteInstance = this.state.newNote;
		newNoteInstance.noteTitle = event.target.value;
		this.setState({	newNote: newNoteInstance });
	}

	onNoteBodyChange(event){
		const newNoteInstance = this.state.newNote;
		newNoteInstance.noteBody = event.target.value;
		this.setState({	newNote: newNoteInstance });
	}

    render() {

    	console.log(this.props.selectedBook.url);
    	console.log(this.props.profileDescription);

		let rows = this.props.profileEditInputList.map( item => { 
			if(item.fieldType === 'selectField'){
				return( 		
					<div id="profileInputField" className="profileInputField">
						<div id="profileTextInputField" className="profileTextInputField">
						 	<spam className="floatLeft profileLabelText">{item.text}:</spam>
						</div>
						<div id="profileFieldInputField" className="profileFieldInputField selectField">
							<SelectFormComponent selectGenres={this.selectGenres} options={this.props.profileEditListOfGenres}  className="profileField" />
						</div>
					</div>			
				)
			}else{
				return( 		
					<div id="profileInputField" className="profileInputField">
						<div id="profileTextInputField" className="profileTextInputField">
						 	<spam className="floatLeft profileLabelText">{item.text}:</spam>
						</div>
						<div id="profileFieldInputField" className="profileFieldInputField">
							<input onChange={this.newDescriptionValues} type="text"  placeholder={this.props.profileDescription[item.fieldName]} id={item.fieldName+"profileEdit"} className="profileField" />
						</div>
					</div>			
				)
			}			
		})

		let listOfNoteDivs = this.props.profileNotesList.slice(0).reverse().map( item => { 
			return( 		
				<div className="profilePostNote">
					<div className="profilePostNoteText"> <div className="floatLeft bold"> {item.title} {" "} 			</div> </div> <br className="clear" />
					<div className="profilePostNoteText"> <div className="floatLeft italic profileNoteDate"> {item.date} {" "} {item.time} </div> </div> <br className="clear" />
					<div className="profilePostNoteText"> <div className="floatLeft"> {item.content} 				</div> </div> <br className="clear" />
				</div>			
			)
		})

		let dashboardHeight = this.state.currentHeight-60;

		if(this.state.profileMode === 'edit'){ 
	        return (
	        	<div>
	        		<Header/>
	        		<div id="profileWrapper" className="profileWrapper textSize" style={{"height": dashboardHeight }} > 

	        			<div id="profileLeftMargin" className="profileLeftMargin">
	        			</div>
	        			
	        			<div id="profilePictureWrapper" className="profilePictureWrapper">
	        				<img id="profileSwttinPhoto" className="profileSwttinPhoto" src={profilePhoto} />
	        			</div>

	        			<div id="profileFieldsWrapper" className="profileFieldsWrapper" style={{"minHeight": dashboardHeight }}>
	        				<div id="profileMyProfile" className="profileMyProfile">
	        					
	        				</div>
	        				<div id="profileFieldsChildWrapper" className="profileFieldsChildWrapper">
		        				{rows}
		        				<div id="profileInputField" className="profileInputField">
		        					<button onClick={() => this.editCurrentDescription()} className="profileSaveButton cursorPointer floatRight"> SAVE </button>
		        					<button onClick={() => this.switchProfileMode('wall') } className="profileCancelButton cursorPointer floatRight"> CANCEL </button>
		        				</div>
		        			</div>	
	        			</div>	

	        			<div id="profileRightMargin" className="profileRightMargin">
	        			</div>

	        		</div>	
	        	</div>
	        );
	    }else {
	    	return (
	    		<div>
	    			<Header/>
	    			<div id="profileWrapper" className="profileWrapper" style={{"height": dashboardHeight-10 }} > 

	        			<div id="profileLeftMargin" className="profileLeftMargin">
	        			</div>
	        			
	        			<div id="profilePictureWrapper" className="profilePictureWrapperWall">

	        				<div id="profilePictureDescriptionWrapper" className="profilePictureDescriptionWrapper">
	        					<img id="profileSwttinPhoto" className="profileSwttinPhoto" src={profilePhoto} />
		        				<div className="profileDescriptionWrapper">
		        					<button  id="profileMode" onClick={() => this.switchProfileMode('edit') } className="profileEditButton cursorPointer floatRight"> EDIT </button>
		        					<div className="profileDescription"> <div className="floatLeft profileDescriptionText"> User: {this.props.profileDescription.name} {" "} {this.props.profileDescription.lastName} </div> </div><br/>
			        				<div className="profileDescription"> <div className="floatLeft profileDescriptionText"> Username: {this.props.profileDescription.username} </div> </div><br/>
			        				<div className="profileDescription"> <div className="floatLeft profileDescriptionText"> BookJanre: {this.props.profileDescription.bookJanre[0].label} </div> </div><br/>
			        				<div className="profileDescription"> <div className="floatLeft profileDescriptionText"> Language: {this.props.profileDescription.language} </div> </div><br/>
		        				</div>

	        				</div>

	        			</div>

	        			<div id="profileFieldsWrapper" className="profileFieldsWrapper">
	        				<div id="profileMyProfile" className="profileMyProfile">
	        					     					
	        				</div>
	        				<div id="profileFieldsChildWrapper" className="profileFieldsChildWrapper">
		        				<div id="profileInputField" className="profileInputField">
									<spam className="profileFieldLabelNote floatLeft">ENTER NOTE: </spam>
									<input type="text" onChange={this.onNoteTitleChange} value={this.state.newNote.noteTitle} placeholder=" enter note's title " className="profileTextFieldNote" />
									<textarea type="text" onChange={this.onNoteBodyChange} value={this.state.newNote.noteBody}  placeholder=" enter note's body " className="profileFieldNote resizeNone" rows="5" cols="60" name="description" />
									<button onClick={() => this.addNewNote()} className="profileSaveButton profileSnedButtonAligne cursorPointer floatRight"> SEND </button>
								</div>			        				
		        			</div>	
		        			
		        			<div>
		        				{listOfNoteDivs}
		        			</div>

	        			</div>	

	        			<div id="profileRightMargin" className="profileRightMargin">
	        			</div>

	        		</div>	    					    			
	    		</div>
	    	)
	    }
    }
}

function mapStateToProps(state, ownProps){
    return {
        courses: state.courses,
        selectedBook: state.selectedBook,
        profileNotesList: state.profileNotesList,
        profileEditInputList: state.profileEditInputList,
        profileEditListOfGenres: state.profileEditListOfGenres,
        profileDescription: state.profileDescription,
    }
}

function mapDispatchToProps(dispatch){
    return{
        profileActions: bindActionCreators(profileActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

