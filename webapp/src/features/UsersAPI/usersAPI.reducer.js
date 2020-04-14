import {
	GET_ALL_USERS_ASYNC,
	DELETE_USER,
	ADD_USER,
} from './usersAPI.actionsTypes'
// import { mergeCollections } from '../../infrastructure/reduxHelpers'

const intitialState = {
	allUsers: [],
}

export default function reducer(state = intitialState, action) {
	switch (action.type) {
		case GET_ALL_USERS_ASYNC.RECEIVED:
			return {
				...state,
				allUsers: action.payload.data,
			}
		case DELETE_USER.RECEIVED:
			return {
				...state,
				allUsers: [
					...state.allUsers.slice(0, action.payload),
					...state.allUsers.slice(action.payload + 1),
				],
			}
		case ADD_USER.RECEIVED:
			return {
				...state,
				allUsers: [
					...state.allUsers,
					{ ...action.payload, id: state.allUsers.length + 1 },
				],
			}
		default: {
			return state
		}
	}
}
