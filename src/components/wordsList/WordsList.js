import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components, photos and material
import Header from '../header/Header';
import SubHeader from '../header/SubHeader';
import DashboardBookCollection from '../dashboard/DashboardBookCollection';
import AddNewWord from './AddNewWord';

import settingsIcon from '../images/settingsIcon.png';
import profilePhoto from '../images/profilePhoto.png';
import readingIcon from '../images/readingIcon.png';
import wordListIcon from '../images/wordListIcon.png';
import dropDownIcon from '../images/dropDownIcon.png';
import hamburgerMenuIcon from '../images/hamburgerMenuIcon.png';
import demoIcon from '../images/demoIcon.png';
import arrowUp from '../images/arrowUp.png';
import addNewItem from'../images/addNewItem.png';
import close from'../images/close.png';

//actions
import * as wordListActions from '../../actions/wordListActions';

var inputedNewWord = '';
var newInputedExplanation = '';
var inputedNewExample = '';

class WordsList extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
		    browserHeight: '700px',
		    isOpen: false,
		    currentHeight: document.documentElement.clientHeight,
	    };
	this.resize = this.resize.bind(this);
	this.onSave = this.onSave.bind(this);
	this.headerMenuItemAction = this.headerMenuItemAction.bind(this);
	}

	headerMenuItemAction(what){
		console.log(what);
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

	incereaseNewWordValue(newWordsPoints){
		alert("Word's value is increased on: " + newWordsPoints);
	}

	onSave(){
		console.log(inputedNewWord);
		console.log(newInputedExplanation);
		console.log(inputedNewExample);

		if(inputedNewWord.length===0){
			alert("PLEASE INSERT THE NEW WORD, OR CANCEL IT.");
		}else if( newInputedExplanation.length===0){
			alert("PLEASE INSERT THE EXPLANATION OR CANCEL IT.");
		}else if( inputedNewExample.length===0 ){
			alert("PLEASE INSERT THE EXAMPLE OR CANCEL IT.");
		}else{ 
			this.setState({
				isOpen: false
			})
			this.props.wordListActions.addNewWord( {'id': '5', 'newWordPoints': '1', 'newWord': inputedNewWord, 'phonethics': '', 'newWordExplanation': newInputedExplanation, 'examples': { '0' : inputedNewExample, '1' : 'default example till I think of something better'}, 'image': 'https://occ-0-1489-1490.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABcs_3xuxkz7jRgXoBrO3vgNTRWUCE4PDrSfo4Us0It8pJ8e73dt-DFhl1k-8sfY94C7nd1vGHgmZ3FHvcV8oA3AOyjj1iM6rxxyWVSzO0HjbG0mQG428CBPnY8v-sKZr_VFVeq3Pe8o.webp'} );                 	
		}
	}

	toggleModal = () => {
	    this.setState({
	      	isOpen: !this.state.isOpen
	    });
	}

	getNewInputedWord(event){
		inputedNewWord = event.target.value;
	}

	getNewInputedExplanation(event){
		newInputedExplanation = event.target.value;
	}

	getNewInputedExample(event){
		inputedNewExample = event.target.value;
	}

    render() {
	 	let dashboardHeight = this.state.currentHeight-60;
	 	inputedNewWord = '';
	 	newInputedExplanation = '';
	 	inputedNewExample = '';

    	let rows = this.props.wordList.slice(0).reverse().map( item => { 		 

			return( 
				<div id="wordsListNewWordWrapper" className="wordsListNewWordWrapper">
        			<div className="newWordSpellingExplanationWrapper">
        				<div id="wordListWordAndExplanationWrapper" className="wordListWordAndExplanationWrapper">
	        				<div id="newWordSpelling" className="newWordExplanation"> <scope className="newWordSpelling"> {item.newWord} </scope> {item.phonethics} - {item.newWordExplanation} </div>
	        			</div>
	        			<div id="newWordValue" className="newWordValue">
	        				<div className="dispalyInlineFlex newWordValueNumber"> {item.newWordPoints} </div> 
	        				<div className="dispalyInlineFlex" onClick={() => this.incereaseNewWordValue(item.newWordPoints)}> <img id="wordListArropUp" className="arrowUpStyle" src={arrowUp} /> </div> 
	        			</div>
	        		</div>
        			<div id="newWordExamples" className="newWordExamples">
        				<div>*{item.examples[0]}</div>
        				<div>*{item.examples[1]}</div>
        			</div>
        		</div>
			)
		})
		
		return( 
			<div id="dashboardComponent" > 
				<Header/>
                <div style={{"height": dashboardHeight}} className="wordsListOverflow">
                	
                	<AddNewWord show={this.state.isOpen} onClose={this.toggleModal} onSave={this.onSave}>
                		<textarea onChange={this.getNewInputedWord} 		placeholder="ENTER NEW WORD "  	rows="5" cols="60" name="description" className="wordListuploadNewText" />
                		<textarea onChange={this.getNewInputedExplanation} 	placeholder="ENTER EXPLANATION "  	rows="5" cols="60" name="description" className="wordListuploadNewText" />
                		<textarea onChange={this.getNewInputedExample} 		placeholder="ENTER ENTER EXAMPLE " rows="5" cols="60" name="description" className="wordListuploadNewText" />
                	</AddNewWord>

                	{this.state.isOpen === true ? 
                		<div onClick={this.toggleModal} > <img id="dashboardPlusIcon" className="addNewItemStyle circleOnProfilePhoto marginRightTwenty" src={close} /> </div>
                	:
                		<div onClick={this.toggleModal} > <img id="dashboardPlusIcon" className="addNewItemStyle circleOnProfilePhoto marginRightTwenty" src={addNewItem} /> </div>
                	}

                	<div id="wordsListWrapper" className="wordsListWrapper">
                		{rows}
                	</div>
                </div>
			</div>
		)
    }
}

function mapStateToProps(state, ownProps){
    return {
        wordList: state.wordList,
    }
}

function mapDispatchToProps(dispatch){
    return{
        wordListActions: bindActionCreators(wordListActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordsList);