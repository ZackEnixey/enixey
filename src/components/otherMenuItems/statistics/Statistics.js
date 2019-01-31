import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

// COMPONENTS, IMAGES
import Header from '../../header/Header';
import demoIcon from '../../images/demoIcon.png';

// ACTIONS
import * as dashboardActions from '../../../actions/dashboardActions';


class Statistics extends Component {

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
                <div className="statisticsBodyWrapper" style={{ "height": dashboardHeight }}>                       

                    <div className="statisticsTitleText"> MOST USED WOR: </div>
                    <img id="frontPageLogoImage" className="statisticsDemoImage" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/01310190-0d42-4b7a-b985-a70c65c56466/8-combined-multi-series-bar-and-line-chart-for-large-data-set-large-opt.png" />           
                   
                    <div className="statisticsTitleText"> NUMBER OF WORDS LEARNED BY ONE USER PER A DAY </div>
                    <img id="frontPageLogoImage" className="statisticsDemoImage" src="https://designmodo.com/wp-content/uploads/2012/08/preview.png" />           
                   
                    <div className="statisticsTitleText"> USER ORIGINE MAP </div>
                    <img id="frontPageLogoImage" className="statisticsDemoImage" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/01310190-0d42-4b7a-b985-a70c65c56466/8-combined-multi-series-bar-and-line-chart-for-large-data-set-large-opt.png" />           
                   
                    <div className="statisticsTitleText"> MOST COMMON PHRASE </div>
                    <img id="frontPageLogoImage" className="statisticsDemoImage" src="https://designmodo.com/wp-content/uploads/2012/08/preview.png" />           
                   
                    <div className="statisticsTitleText"> USER ACTIVITY PER HOUR </div>
                    <img id="frontPageLogoImage" className="statisticsDemoImage" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/01310190-0d42-4b7a-b985-a70c65c56466/8-combined-multi-series-bar-and-line-chart-for-large-data-set-large-opt.png" />           

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

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);