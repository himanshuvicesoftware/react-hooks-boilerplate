import * as usersAPIActions from './usersAPI.actionsTypes'
import useAsync from '../../infrastructure/useAsync'
import { DELETE_USER, ADD_USER, EDIT_USER } from './usersAPI.actionsTypes'

export function useGetUsers() {
	useAsync({
		url: 'https://reqres.in/api/users',
		actionType: usersAPIActions.GET_ALL_USERS_ASYNC,
	})
}

export function deleteUser(dispatch, userId) {
	dispatch({ type: DELETE_USER.RECEIVED, payload: userId })
}

export function editUserDetails(dispatch, user, index) {
	dispatch({ type: EDIT_USER.RECEIVED, payload: { user, index } })
}

export function addUser(dispatch, user) {
	dispatch({ type: ADD_USER.RECEIVED, payload: user })
}
