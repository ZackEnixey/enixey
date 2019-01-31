import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// COMPONENTS, PHOTOS
import Header from '../header/Header';
import settingsIcon from '../images/settingsIcon.png';

// ACTIONS
import * as profileActions from '../../actions/profileActions';

class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentHeight: document.documentElement.clientHeight,
        };
        this.resize = this.resize.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
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

    onClickSave(){
        // this.props.profileActions.addNewNote("name is here :D ");
    }

    render() {

        let dashboardHeight = this.state.currentHeight-68;

        let listOfIterations = [
            {'id': '0'},
            {'id': '1'},
            {'id': '2'},
            {'id': '3'},
            {'id': '4'},
            {'id': '5'},
            {'id': '6'},
            {'id': '7'},
            {'id': '8'},
            {'id': '9'},
        ]

        let inputs = listOfIterations.map( item => { 
            return(
                <div id="headerMenuWrapper">                         
                    <input type="text" placeholder="  search" onChange={this.handleNameChange} className="searchFormField" />
                    <button onClick={this.handleSubmit} className="searchFormButton cursorPointer"> EDIT </button>
                </div>
            )
        })

        let infoAlerts = listOfIterations.map( item => { 
            return(
                <div id="settinsInfoText" className="infoText"> Settings will be realized in next itterations </div>
            )
        })

        return (
        	<div>
        		<Header/>
        		<div className="profileWrapper textSize" style={{"height": dashboardHeight }} >
                    <div id="deletethisSettingDiv" style={{"height": "100px"}}> </div>
                    <img id="frontPageLogoImage" className="" src={settingsIcon} />
                    <div id="deletethisSettingDiv" style={{"height": "100px"}}> </div>
                    <div className="statisticsTitleText"> SETTING ARE TO BE DEVELOPED IN NEXT ITERATION OF THE SOFTWARE </div>
                    <div id="deletethisSettingDiv" style={{"height": "100px"}}> </div>
                    <img id="frontPageLogoImage" className="" src={settingsIcon} />
                    <div id="deletethisSettingDiv" style={{"height": "100px"}}> </div>
                    <div className="statisticsTitleText"> THE APPLICATIONS STILL CAN BE USED WITH ANY SIDDOWNS </div>
                    <div id="deletethisSettingDiv" style={{"height": "100px"}}> </div>
                    <img id="frontPageLogoImage" className="" src={settingsIcon} />
                    <div id="deletethisSettingDiv" style={{"height": "100px"}}> </div>
                    <div className="statisticsTitleText"> THANK YOU FOR UNDERSTANDING </div>
                    <div id="deletethisSettingDiv" style={{"height": "100px"}}> </div>
                    <img id="frontPageLogoImage" className="" src={settingsIcon} />
                    <div id="deletethisSettingDiv" style={{"height": "100px"}}> </div>
                </div>
        	</div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        courses: state.courses,
        profileNotesList: state.profileNotesList
    }
}

function mapDispatchToProps(dispatch){
    return{
        profileActions: bindActionCreators(profileActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);