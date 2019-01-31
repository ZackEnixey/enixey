import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

// COMPONENTS, IMAGES
import Header from '../../header/Header';
import demoIcon from '../../images/demoIcon.png';

// ACTIONS
import * as dashboardActions from '../../../actions/dashboardActions';


class Recomendations extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	demo: '',
            currentHeight: document.documentElement.clientHeight-60,
	    };
	   this.resize = this.resize.bind(this);
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

    render() {

        let dashboardHeight = this.state.currentHeight;

  		return( 
  			<div id="statisticsWrapper" >   
  				<Header/>  
                <div className="forumWrapper" style={{"height": dashboardHeight}}>
                    <div className="forumComponentWrapper" >                 
                        <div className="statisticsTitleText"> THIS IS DEMO MATERIAL. THIS PAGE WILL BE DEVELOPED IN NEXT ITRERATIONS  </div>      
                        <div className="statisticsTitleText" style={{"margin-bottom": "60px"}}> 23 Useful Websites for Teaching and Learning English  </div>
                    
                        <div className="statisticsTitleText textAlignleft">Culturally Authentic Pictorial Lexicon:  </div>
                        <div className="textAlignleft" style={{"margin-bottom": "20px"}}> Check out this lexicon that offers images demonstrating the true meaning of the word, making it easier for English language learners to understand. </div>

                        <div className="statisticsTitleText textAlignleft">  ManyThings: </div>
                        <div className="textAlignleft" style={{"margin-bottom": "20px"}}> On this website, you’ll find quizzes, word games, puzzles, and a random sentence generator to help students better grasp English as a second language. </div>

                        <div className="statisticsTitleText textAlignleft">  bab.la: </div>
                        <div className="textAlignleft" style={{"margin-bottom": "20px"}}> Bab.la is a really fun site for ELL learners, with reference tools like a dictionary and vocabulary, supplemented with quizzes, games, and a community forum. </div>

                        <div className="statisticsTitleText textAlignleft">  ESL Basics: </div>
                        <div className="textAlignleft" style={{"margin-bottom": "20px"}}> On this site, you’ll find free English videos for both students and teachers. </div>

                        <div className="statisticsTitleText textAlignleft">  English Pronunciation:</div>
                        <div className="textAlignleft" style={{"margin-bottom": "20px"}}>  Okanagan College’s resource offers 13 different unit lessons for learning and teaching English pronunciation. </div>

                        <div className="statisticsTitleText textAlignleft">  BBC Learning English: </div>
                        <div className="textAlignleft" style={{"margin-bottom": "20px"}}> In this website from the BBC, students can find help with grammar, vocabulary, and pronunciation, with plenty of references to current events. Plus, you’ll find a special section for ELL teachers. </div>

                        <div className="statisticsTitleText textAlignleft">  ESL Gold: </div>
                        <div className="textAlignleft" style={{"margin-bottom": "20px"}}> ESL Gold is, no joke, golden, with seemingly endless learning resources for English. Students can practice pronunciation, find a book to study, and even talk to someone in English on this site. Plus, teachers can find a job, search for textbooks, discover games, and so much more. </div>

                        <div className="statisticsTitleText textAlignleft">  Real English:</div>
                        <div className="textAlignleft" style={{"margin-bottom": "20px"}}>  Check out this free site for learning English, with loads of videos from real English speakers, plus quizzes and community support. </div>

                        <div className="statisticsTitleText textAlignleft">  Repeat After Us: </div>
                        <div className="textAlignleft" style={{"margin-bottom": "20px"}}> In this online library, students can get access to a huge collection of English texts and scripted recordings. </div>

                        <div className="statisticsTitleText textAlignleft">  Google Translate: </div>
                        <div className="textAlignleft" style={{"margin-bottom": "20px"}}> An awesome resource to use for simple translations, Google Translate can help your students see how its done and better understand translations between two or more languages. </div>

                         <div className="statisticsTitleText textAlignleft">Culturally Authentic Pictorial Lexicon:  </div>
                        <div className="textAlignleft" style={{"margin-bottom": "20px"}}> Check out this lexicon that offers images demonstrating the true meaning of the word, making it easier for English language learners to understand. </div>

                        <div className="statisticsTitleText textAlignleft">  ManyThings: </div>
                        <div className="textAlignleft" style={{"margin-bottom": "20px"}}> On this website, you’ll find quizzes, word games, puzzles, and a random sentence generator to help students better grasp English as a second language. </div>

                        <div className="statisticsTitleText textAlignleft">  bab.la: </div>
                        <div className="textAlignleft" style={{"margin-bottom": "20px"}}> Bab.la is a really fun site for ELL learners, with reference tools like a dictionary and vocabulary, supplemented with quizzes, games, and a community forum. </div>

                        <div className="statisticsTitleText textAlignleft">  ESL Basics: </div>
                        <div className="textAlignleft" style={{"margin-bottom": "20px"}}> On this site, you’ll find free English videos for both students and teachers. </div>

                        <div className="statisticsTitleText textAlignleft">  English Pronunciation:</div>
                        <div className="textAlignleft" style={{"margin-bottom": "20px"}}>  Okanagan College’s resource offers 13 different unit lessons for learning and teaching English pronunciation. </div>

                        <div className="statisticsTitleText textAlignleft">  BBC Learning English: </div>
                        <div className="textAlignleft" style={{"margin-bottom": "20px"}}> In this website from the BBC, students can find help with grammar, vocabulary, and pronunciation, with plenty of references to current events. Plus, you’ll find a special section for ELL teachers. </div>

                        <div className="statisticsTitleText textAlignleft">  ESL Gold: </div>
                        <div className="textAlignleft" style={{"margin-bottom": "20px"}}> ESL Gold is, no joke, golden, with seemingly endless learning resources for English. Students can practice pronunciation, find a book to study, and even talk to someone in English on this site. Plus, teachers can find a job, search for textbooks, discover games, and so much more. </div>

                        <div className="statisticsTitleText textAlignleft">  Real English:</div>
                        <div className="textAlignleft" style={{"margin-bottom": "20px"}}>  Check out this free site for learning English, with loads of videos from real English speakers, plus quizzes and community support. </div>

                        <div className="statisticsTitleText textAlignleft">  Repeat After Us: </div>
                        <div className="textAlignleft" style={{"margin-bottom": "20px"}}> In this online library, students can get access to a huge collection of English texts and scripted recordings. </div>

                        <div className="statisticsTitleText textAlignleft">  Google Translate: </div>
                        <div className="textAlignleft" style={{"margin-bottom": "20px"}}> An awesome resource to use for simple translations, Google Translate can help your students see how its done and better understand translations between two or more languages. </div>


                    </div>
                </div>
  			</div>
  		)
    }
}


function mapStateToProps(state, ownProps){
    return {
        otherFeatures: state.otherFeatures,
    }
}

function mapDispatchToProps(dispatch){
    return{
        dashboardActions: bindActionCreators(dashboardActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recomendations);