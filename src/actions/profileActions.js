import * as allActions from '../actions/allActions';


export function addNewNote(newNote){
	return {type: allActions.ADD_NEW_PROFILE_NOTE, newNote: newNote};
}

export function addNewEditInput(newEditImput){
    return {type: allActions.ADD_NEW_INPUT_FIELD, newEditImput: newEditImput};
}

export function editCurrentDescription(newEnteredEditData){
    console.log(newEnteredEditData);
    return {type: allActions.UPDATE_PROFILE_EDIT, newEnteredEditData: newEnteredEditData};
}






/*

import * as allActions from './allActions';

export function receiveStuff(data) {
    return {type: allActions.RECEIVE_STUFF, stuff: data};
}

export function fetchStuff() {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>
                response.json().then(data => ({
                    data: data,
                    status: response.status
                }))
            )
            .then(response => {
                if(response.status === 200){
                    dispatch(receiveStuff(response.data))
                }else{
                    var flash = {
                        type: 'error',
                        title: 'Error getting task list',
                        content: 'There was an error getting the task list. Please try again.'
                    }
                    dispatch({type: "DISPLAY_FLASH", data: flash})
                }
            });
    };
}


*/