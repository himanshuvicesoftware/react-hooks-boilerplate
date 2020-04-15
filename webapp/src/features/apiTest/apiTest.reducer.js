import {
	GET_ALL_API_TEST,
	GET_API_TEST_BY_ID,
	GET_API_TEST_FOR_PAGE_TWO,
} from './apiTest.actionsTypes'
import { mergeCollections } from '../../infrastructure/reduxHelpers'

const intitialState = {
	allApiTest: [],
}

export default function reducer(state = intitialState, action) {
	switch (action.type) {
		case GET_ALL_API_TEST.RECEIVED:
			return {
				...state,
				allApiTest: action.payload.data,
			}

		case GET_API_TEST_FOR_PAGE_TWO.RECEIVED:
			return {
				allApiTest: [...state.allApiTest, ...action.payload.data],
			}

		case GET_API_TEST_BY_ID.RECEIVED:
			return {
				...state,
				allApiTest: mergeCollections(state.allApiTest, action.payload),
			}
		default: {
			return state
		}
	}
}
