import React, { Component } from 'react';
import settingsIcon from '../images/settingsIcon.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as dashboardActions from '../../actions/dashboardActions';

class DashboardBookCollection extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
		    browserHeight: '700px',
		    currentHeight: document.documentElement.clientHeight,
	    };
	    this.resize = this.resize.bind(this);
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

    openSelectedBook(item){
        console.log(item);
        this.props.dashboardActions.setSelectedBook(item);
    }

    render() {

		let listOfBooks = this.props.dashboardBookList.slice(0).reverse().map( item => { 
			console.log("one")
			return( 
                <Link to={"/openedBook/"+item.url}>		
    				<div className="dashboardBookWrapper" onClick={() => this.openSelectedBook(item)}>
    					 <img id="frontPageLogoImage" className="dashboardBook" src={item.image} />
    				</div>		
                </Link>
			)
		})

		console.log(this.state.currentHeight);

		let dashboardHeight = this.state.currentHeight-99;

		return( 
			<div id="dashboardBookCollectionComponentWrapper" > 
				<div id="mainDashboardWrapper" className="mainDashboardWrapper" style={{"height": dashboardHeight }}>
					{listOfBooks}
				</div>
			</div>
		)
    }
}


function mapStateToProps(state, ownProps){
    return {
        dashboardBookList: state.dashboardBookList,
        selectedBook: state.selectedBook,
    }
}

function mapDispatchToProps(dispatch){
    return{
        dashboardActions: bindActionCreators(dashboardActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardBookCollection);
