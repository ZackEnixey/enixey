import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

// COMPONENTS, IMAGES
import Header from '../../header/Header';
import demoIcon from '../../images/demoIcon.png';
import futureIcon from '../../images/futureIcon.png';

// ACTIONS
import * as dashboardActions from '../../../actions/dashboardActions';


class FuturePlans extends Component {

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
                <div className="statisticsBodyWrapper" style={{"height": dashboardHeight}}>                       

                    <div id="deletethisSettingDiv" style={{"height": "100px"}}> </div>
                    <img id="frontPageLogoImage" className="" src={futureIcon} />
                    <div id="deletethisSettingDiv" style={{"height": "100px"}}> </div>
                    <div className="statisticsTitleText"> FUTURE PLANS ARE TO BE DEVELOPED IN NEXT ITERATION OF THE SOFTWARE </div>
                    <div id="deletethisSettingDiv" style={{"height": "100px"}}> </div>
                    <img id="frontPageLogoImage" className="" src={futureIcon} />
                    <div id="deletethisSettingDiv" style={{"height": "100px"}}> </div>
                    <div className="statisticsTitleText"> THE APPLICATIONS STILL CAN BE USED WITH ANY SIDDOWNS </div>
                    <div id="deletethisSettingDiv" style={{"height": "100px"}}> </div>
                    <img id="frontPageLogoImage" className="" src={futureIcon} />
                    <div id="deletethisSettingDiv" style={{"height": "100px"}}> </div>
                    <div className="statisticsTitleText"> THANK YOU FOR UNDERSTANDING </div>
                    <div id="deletethisSettingDiv" style={{"height": "100px"}}> </div>
                    <img id="frontPageLogoImage" className="" src={futureIcon} />
                    <div id="deletethisSettingDiv" style={{"height": "100px"}}> </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(FuturePlans);