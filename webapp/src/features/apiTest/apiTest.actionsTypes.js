import { buildAsyncActionType } from '../../infrastructure/reduxHelpers'

export const GET_ALL_API_TEST = buildAsyncActionType(
	'apiTest',
	'GET_ALL_API_TEST'
)

export const GET_API_TEST_FOR_PAGE_TWO = buildAsyncActionType(
	'apiTest',
	'GET_API_TEST_FOR_PAGE_TWO'
)

export const GET_API_TEST_BY_ID = buildAsyncActionType(
	'apiTest',
	'GET_API_TEST_BY_ID'
)
