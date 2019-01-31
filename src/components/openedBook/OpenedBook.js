import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// COMPONENTS
import Header from '../header/Header';
import SubHeader from '../header/SubHeader';
import TextGeneratorDEMO from './TextGeneratorDEMO';

// ACTIONS
import * as dashboardActions from '../../actions/dashboardActions';
import * as wordListActions from '../../actions/wordListActions';

var newWord = '';
var lockedVariable = 'unlocked';

class OpenedBook extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
		    browserHeight: '700px',
		    currentHeight: document.documentElement.clientHeight,
	    };
	this.resize = this.resize.bind(this);
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

	checkingSelection(variable){
		newWord = window.getSelection().toString();	
		console.log(newWord);
		if(lockedVariable == 'unlocked' && newWord.length>1){
			lockedVariable = 'locked';
			this.setNewWord();
		}			
	}

	setNewWord(){
		lockedVariable = 'locked';
		setTimeout( this.unlockVariable , 1577);
		console.log(' aaaaaaaaaaaaaaaaaaaaa#33333333333############3')
		if(!newWord.length < 1){
			this.props.wordListActions.addNewWord( {'id': '5', 'newWordPoints': '1', 'newWord': window.getSelection().toString(), 'phonethics': '', 'newWordExplanation': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 'examples': { '0' : 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', '1' : 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'}, 'image': 'https://occ-0-1489-1490.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABcs_3xuxkz7jRgXoBrO3vgNTRWUCE4PDrSfo4Us0It8pJ8e73dt-DFhl1k-8sfY94C7nd1vGHgmZ3FHvcV8oA3AOyjj1iM6rxxyWVSzO0HjbG0mQG428CBPnY8v-sKZr_VFVeq3Pe8o.webp'} );                 	
		}
		setTimeout( this.unlockVariable , 577);
	}

	unlockVariable(){
		lockedVariable = 'unlocked'
	}

    render() {

    	console.log(this.props.selectedBook);
    	let dashboardHeight = this.state.currentHeight-58;
		return( 
			<div id="dashboardComponent" > 
				<Header/>
                <div id="openBookArea" className="openBookArea" style={{"height": dashboardHeight }}> 
               		<div className="readingArea readingAreaText">
               			<div className="readingAreaTextWrapper" onClick={() => this.checkingSelection("onClick")} onDoubleClick={() => this.checkingSelection("onDoubleClick")} >
               				{this.props.selectedBook.bookContent}
               			</div>
               		</div>
               	</div>
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
        wordListActions: bindActionCreators(wordListActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenedBook);