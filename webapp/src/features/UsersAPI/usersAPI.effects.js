import * as userActions from './usersAPI.actionsTypes'
// import useAsync from '../../infrastructure/useAsync'
import {
	GET_ALL_USERS_ASYNC,
	DELETE_USER,
	ADD_USER,
} from './usersAPI.actionsTypes'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export function useGetUsers() {
	debugger
	const dispatch = useDispatch()
	useEffect(() => {
		axios
			.get('https://reqres.in/api/users')
			.then((res) => {
				dispatch({ type: GET_ALL_USERS_ASYNC.RECEIVED, payload: res.data.data })
			})
			.catch(console.log('Error in API call'))
	}, [])
}

export function deleteUser(dispatch, userId) {
	dispatch({ type: DELETE_USER.RECEIVED, payload: userId })
}

export function editUserDetails(userDetail, id) {
	// const dispatch = useDispatch()
	// dispatch({ type: DELETE_USER.RECEIVED, payload: userId })
}

export function addUser(dispatch, user) {
	dispatch({ type: ADD_USER.RECEIVED, payload: user })
}
