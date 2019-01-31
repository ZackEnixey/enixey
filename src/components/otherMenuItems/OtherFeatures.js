import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

// COMPONENTS, IMAGES
import Header from '../header/Header';
import MobileHeader from '../header/MobileHeader';
import demoIcon from '../images/demoIcon.png';

// ACTIONS
import * as dashboardActions from '../../actions/dashboardActions';


class OtherFeatures extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	demo: '',
            currentHeight: document.documentElement.clientHeight-85,
	    };
	   this.resize = this.resize.bind(this);
    }

    resize() {
        this.setState({
            currentHeight: document.documentElement.clientHeight-85,
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

        let listOfOtherFeatures = this.props.otherFeatures.map( item => { 

            if(item.url ==='userstories'){
                return(                     
                    <div className="otherFeaturesITEMDivWrapper" >
                        <Link to={"/otherFeatures/"+item.url} style={{'textDecoration': 'none'}} >
                            <div id="otherFeaturesITEMImage" className="otherFeaturesITEMImageWraper"> 
                                <img id="frontPageLogoImage" className="otherFeaturesITEMImage" src={item.image} /> 
                            </div>
                            <div id="otherFeaturesITEMText" className="otherFeaturesITEMText">
                                {item.name}
                            </div>
                        </Link>
                    
                    </div>                    
                )
            }else{
                return(                     
                    <div className="otherFeaturesITEMDivWrapper" >
                        <Link to={"/otherFeatures/"+item.url} style={{'textDecoration': 'none'}} >
                            <div id="otherFeaturesITEMImage" className="otherFeaturesITEMImageWraper"> 
                                <img id="frontPageLogoImage" className="otherFeaturesITEMImage" src={demoIcon} /> 
                            </div>
                            <div id="otherFeaturesITEMText" className="otherFeaturesITEMText">
                                {item.name}
                            </div>
                        </Link>
                    
                    </div>                    
                ) 
            }
        })

    	console.log(this.props.otherFeatures);
  		return( 
  			<div id="otherFeaturesWraper" >   
  				<Header />  
                <div id="listOfOtherFeaturesWrapper" className="listOfOtherFeaturesWrapper" style={{"height": dashboardHeight}}>   
                    
                     {listOfOtherFeatures}
                
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

export default connect(mapStateToProps, mapDispatchToProps)(OtherFeatures);