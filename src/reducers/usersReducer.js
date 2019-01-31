import initialState from './initialState';
import * as allActions from '../actions/allActions';


export function listOfUsers(store = initialState.listOfUsers, action){
	switch(action.type){

		case allActions.ADD_NEW_USER:
			return [...store, action.newUser]

		default: 
			return store;
	}
}