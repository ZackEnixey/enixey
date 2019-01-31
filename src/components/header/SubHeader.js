import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// COMPONENTS
import addNewItem from'../images/addNewItem.png';
import AddNewBook from './AddNewBook';

// ACTIONS
import * as dashboardActions from '../../actions/dashboardActions';

var inputedText = '';

class SubHeader extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
		    browserHeight: '700px',
		    isOpen: false,
		    fileOrPlainText: 'plainText',
		    inputedTextState: '',
	    };
	    this.headerMenuItemAction = this.headerMenuItemAction.bind(this);
	    this.onSave = this.onSave.bind(this);
	    this.changeTypeOfInput = this.changeTypeOfInput.bind(this);
	}

	headerMenuItemAction(what){
		console.log(what);
	}

	toggleModal = () => {
	    this.setState({
	      	isOpen: !this.state.isOpen
	    });
	}

	onSave(){
		console.log(inputedText);

		if(inputedText.length===0){
			alert("Nothing was inserted");
		}else{ 
			this.setState({
				isOpen: false
			})
			this.props.dashboardActions.addNewBook( {'id': '34',  'state': 'A', 'url': 'newmaterial', 'property': 'uploaded', 'title': 'reading material', 'subtitle': 'uploaded material', 'image': 'https://i.ibb.co/ctmjFF6/13.jpg'		}, );                 	
			this.props.dashboardActions.setSelectedBook(  {'id': '1', 'status': 'A', 'dashboardBookListId': '4', 'url': 'newUrlforUpladedmaterial', 'title': 'Alice in Wonderland', 'subtitle': 'explore the universe', 'author': 'Lewis Carroll', 'image': 'https://images.gr-assets.com/books/1451442088l/24817626.jpg', 'bookContent': inputedText });
		}
	}

	changeTypeOfInput(uloadedType){
		this.setState({
			fileOrPlainText: uloadedType,
			inputedTextState: inputedText
		})
	}

	getInputedText(event){
		inputedText = event.target.value;
	}

    render() {
    	inputedText = '';
		return( 
			<div id="subHeaderComponentWrapper" className="subheader"> 


		        <AddNewBook show={this.state.isOpen} onClose={this.toggleModal} onSave={this.onSave}>
			        
			        <div className="footer">
			       		<button onClick={() => this.changeTypeOfInput('plainText')} className="addNewReadingMaterialUPLOADButton cursorPointer floatRight" style={{"marginRight": "1%"}} > 
	                     	UPLOAD PLAIN TEXT
	                  	</button>
	                  	<button onClick={() => this.changeTypeOfInput('file')} className="addNewReadingMaterialUPLOADButton cursorPointer floatRight" style={{"marginLeft": "1%"}} > 
	                      	UPLOAD FILE
	                  	</button>	                 	
	             	</div>

		          	{ this.state.fileOrPlainText === 'file' ?
			          	<div className="addNewBookModalStyle">
			          		<div className="addNewReadingMaterialDragAndDrop appColor"> DRAG & DROP </div>
			          		<div className="appColor"> reding material </div>
			          	</div>
			        :
					    <textarea onChange={this.getInputedText} rows="5" cols="60" name="description" className="uploadNewText" />
			    	}

		        </AddNewBook>

				<div onClick={this.toggleModal} > <img id="dashboardPlusIcon" className="addNewItemStyle circleOnProfilePhoto" src={addNewItem} /> </div>
			</div>
		)
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

export default connect(mapStateToProps, mapDispatchToProps)(SubHeader);