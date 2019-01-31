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
import * as userStoriesActions from '../../../actions/userStoriesActions';

var userStorieTemplate = "As a <type of user>, I want <some goal> so that <some reason>";

var userStoryUser = "";
var userStoryGoal = "";
var userStoryReason = "";

class UserStories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            demo: '',
            currentHeight: document.documentElement.clientHeight-60,
        };
       this.resize = this.resize.bind(this);
       this.onChangeTypeOfUser = this.onChangeTypeOfUser.bind(this);
       this.onChangeUserStoryGoal = this.onChangeUserStoryGoal.bind(this);
       this.onChangeUserStoryReason = this.onChangeUserStoryReason.bind(this);
       this.saveNewUserStorie = this.saveNewUserStorie.bind(this);
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

    onChangeTypeOfUser(event){
        userStoryUser = event.target.value;
    }

    onChangeUserStoryGoal(event){
        userStoryGoal = event.target.value;
    }

    onChangeUserStoryReason(event){
        userStoryReason = event.target.value;
    }

    saveNewUserStorie(){
        this.props.userStoriesActions.addNewUserStorie( {'id': '254', 'userId': '2', 'username': 'Zack92E',  'name': 'Zack',   'lastName': 'Enixey', 'date': userStoryUser, 'time': userStoryGoal, 'likes': '15', 'image': 'https://media.licdn.com/dms/image/C4D03AQE9aEJahq0gXA/profile-displayphoto-shrink_200_200/0?e=1553126400&v=beta&t=OILAFEtA0cEiFEvmjwNHfezXZ8kNhc_SnWPmoyoskTQ', 'title': userStoryReason, 'content': userStoryReason } );
    }


    render() {

        let dashboardHeight = this.state.currentHeight;
        console.log(" write down those user stories" + this.props.userStoriesList);

        let userStoriesContainterList = this.props.userStoriesList.slice(0).reverse().map(item => {
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
                        <div className="userStoriesInputWrapper" > 
                            <div className="statisticsTitleText textAlignleft"> PLEASE ENTER YOUR USER STORY: </div>
                            <div className="notBold appsGreen notBold" >
                                "{userStorieTemplate}" 
                            </div>
                            <div className="textTemplate" >
                                TYPE OF USER:
                            </div> 
                            <input type="text" onChange={this.onChangeTypeOfUser}         placeholder="TYPE OF USER "           className="forumTipTitleInput"  rows="5" cols="60" name="description" />
                            <div className="textTemplate" >
                                PERFORM SOME TASK...:
                            </div>
                            <textarea type="text" onChange={this.onChangeUserStoryGoal}   placeholder="PERFORM SOME TASK... "   className="userStoriesInput"    rows="5" cols="60" name="description" />
                            <div className="textTemplate" >
                                SO THAT I CAN...:
                            </div>
                            <textarea type="text" onChange={this.onChangeUserStoryReason} placeholder="SO THAT I CAN... "       className="userStoriesInput"    rows="5" cols="60" name="description" />
                            
                            <button onClick={() => this.saveNewUserStorie()} className="forumSaveButton cursorPointer floatRight" > SEND </button>

                        </div>
                        <div className="marginTopTwenty">
                            {userStoriesContainterList}
                        </div>    
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state, ownProps){
    return {
        userStoriesList: state.userStoriesList,
    }
}

function mapDispatchToProps(dispatch){
    return{
        userStoriesActions: bindActionCreators(userStoriesActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserStories);