import * as usersAPIActions from './usersAPI.actionsTypes'
import useAsync from '../../infrastructure/useAsync'
import {
	GET_ALL_USERS_ASYNC,
	DELETE_USER,
	ADD_USER,
} from './usersAPI.actionsTypes'

export function useGetUsers() {
	useAsync({
		url: 'https://reqres.in/api/users',
		actionType: usersAPIActions.GET_ALL_USERS_ASYNC,
	})
}

export function deleteUser(dispatch, userId) {
	dispatch({ type: DELETE_USER.RECEIVED, payload: userId })
}

export function editUserDetails() {}

export function addUser(dispatch, user) {
	dispatch({ type: ADD_USER.RECEIVED, payload: user })
}
