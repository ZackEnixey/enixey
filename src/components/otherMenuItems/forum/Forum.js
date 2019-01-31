import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

// COMPONENTS, IMAGES
import Header from '../../header/Header';
import demoIcon from '../../images/demoIcon.png';
import arrowUpGreen from '../../images/arrowUpGreen.png';
import arrowDownGreen from '../../images/arrowDownGreen.png';

// ACTIONS
import * as forumActions from '../../../actions/forumActions';


class Forum extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	demo: '',
            newNote: {
                noteTitle: '',
                noteBody: '',
            },
            currentHeight: document.documentElement.clientHeight-60,
	    };
	   this.resize = this.resize.bind(this);
       this.onNoteTitleChange = this.onNoteTitleChange.bind(this);
       this.onNoteBodyChange = this.onNoteBodyChange.bind(this);
       this.saveNewForumTip = this.saveNewForumTip.bind(this);
    }

    resize() {
        this.setState({
            currentHeight: document.documentElement.clientHeight-60,
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

    onNoteTitleChange(event){
        const newNoteInstance = this.state.newNote;
        newNoteInstance.noteTitle = event.target.value;
        this.setState({ newNote: newNoteInstance });
    }

    onNoteBodyChange(event){
        const newNoteInstance = this.state.newNote;
        newNoteInstance.noteBody = event.target.value;
        this.setState({ newNote: newNoteInstance });
    }

    saveNewForumTip(){
        this.props.forumActions.addNewForumTip( {'id': '254', 'userId': '2', 'username': 'Zack92E',  'name': 'Zack',   'lastName': 'Enixey', 'date': this.getCurrentDate(), 'time': this.getCurrentTime(), 'likes': '15', 'image': 'https://media.licdn.com/dms/image/C4D03AQE9aEJahq0gXA/profile-displayphoto-shrink_200_200/0?e=1553126400&v=beta&t=OILAFEtA0cEiFEvmjwNHfezXZ8kNhc_SnWPmoyoskTQ', 'title': this.state.newNote.noteTitle, 'content': this.state.newNote.noteBody } );
    }


    render() {

        let dashboardHeight = this.state.currentHeight;

        let forumTipsContainterList = this.props.forumTipsList.slice(0).reverse().map(item => {
            return(
                <div id='forumTipWrapper' className="forumTipWrapper" >                    
                    <div id="forumTipFIRSTRowtitlePoints" className="forumTipFIRSTRowtitlePoints" >
                        <div id="forumTipTitle" className="forumTipTitle fontfamily bold">
                            {item.title}
                        </div>
                        <div id="forumTipPoints" className="forumTipPoints">
                            <div id="forumTipPointsIncrese" className="forumTipPointsIncrese">
                                <img id="forumArropUp" className="forumArrowUp" src={arrowUpGreen} /> 
                            </div>
                            <div id="forumTipPointsDecrese" className="forumTipPointsDecrese">
                                <img id="forumArropUp" className="forumArrowUp" src={arrowDownGreen} /> 
                            </div>
                            <div id="forumTipPointsNumber" className="forumTipPointsNumber ">
                                {item.likes}
                            </div>                            
                        </div>
                    </div>
                    <div id="forumTipSECONDRowImageName" className="forumTipSECONDRowImageName" >
                        <div id="forumTipUserImageWrapper" className="forumTipUserImageWrapper" >
                            <img id="forumTipUserImage" className="forumTipUserImage" src={item.image} />
                        </div>
                        <div id="forumTipUserInfoAndDate" className="forumTipUserInfoAndDate">
                            <div id="forumTipUserName" className="forumTipUserName" >
                                {item.username}
                            </div>
                            <div id="forumTipPostingDate" className="forumTipPostingDate italic">
                                {item.date} {" - "} {item.time}
                            </div>
                        </div>
                    </div>
                    <div id="forumTipTHIRDRowText" className="forumTipTHIRDRowText" >
                        {item.content}
                    </div>
                </div>
            )
        })

  		return( 
  			<div id="statisticsWrapper" >   
  				<Header/>  
                <div className="forumWrapper" style={{"height": dashboardHeight}}>
                    <div className="forumComponentWrapper" >                       
                        <div className="forumTipInputWrapper" > 
                            <div className="statisticsTitleText textAlignleft"> PLEASE SHARE YOUR TIP WITH OTHERS: </div>
                            <input type="text"    onChange={this.onNoteTitleChange} value={this.state.newNote.noteTitle}  placeholder="ENTER TITLE " className="forumTipTitleInput" />
                            <textarea type="text" onChange={this.onNoteBodyChange} value={this.state.newNote.noteBody}    placeholder="ENTER SOME TIP " className="forumTipInput" rows="5" cols="60" name="description" />
                            <button onClick={() => this.saveNewForumTip()} className="forumSaveButton cursorPointer floatRight" > SEND </button>
                        </div>
                        <div>
                            {forumTipsContainterList}
                        </div>    
                    </div>
                </div>
  			</div>
  		)
    }
}


function mapStateToProps(state, ownProps){
    return {
        forumTipsList: state.forumTipsList,
    }
}

function mapDispatchToProps(dispatch){
    return{
        forumActions: bindActionCreators(forumActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Forum);