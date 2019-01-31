import * as allActions from '../actions/allActions';


export function addNewUser(username, newUser){
	var newUserInstance = {'username': username, 'password': newUser}
	return {type: allActions.ADD_NEW_USER, newUser: newUserInstance};
}
