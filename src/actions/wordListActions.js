import * as allActions from '../actions/allActions';


export function addNewWord(newWord){
	return {type: allActions.ADD_NEW_WORD, newWord: newWord};
}
