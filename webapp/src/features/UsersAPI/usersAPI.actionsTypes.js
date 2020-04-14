import { buildAsyncActionType } from '../../infrastructure/reduxHelpers'

export const GET_ALL_USERS_ASYNC = buildAsyncActionType(
	'users',
	'GET_ALL_USERS_ASYNC'
)

export const DELETE_USER = buildAsyncActionType('users', 'DELETE_USER')

export const ADD_USER = buildAsyncActionType('users', 'ADD_USER')
export const EDIT_USER = buildAsyncActionType('users', 'EDIT_USER')
