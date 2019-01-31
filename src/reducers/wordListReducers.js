import initialState from './initialState';
import * as allActions from '../actions/allActions';


export function wordList(store = initialState.wordListArray, action){
	switch(action.type){
		case allActions.LIST_ALL_WORDS: 
			return store;

		case allActions.ADD_NEW_WORD:
			return [...store, action.newWord]

		case allActions.REMOVE_EXISTING_WORD:
			return store;
 
		default: 
			return store;
	}
}