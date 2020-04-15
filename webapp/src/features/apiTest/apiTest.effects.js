import * as apiTestActions from './apiTest.actionsTypes'
import useAsync from '../../infrastructure/useAsync'

export function useGetAllApiTest() {
	// debugger
	useAsync({
		url: 'https://reqres.in/api/users?page=1',
		actionType: apiTestActions.GET_ALL_API_TEST,
	})
}

export function useGetAllApiTestPageTwo() {
	useAsync({
		url: 'https://reqres.in/api/users?page=2',
		actionType: apiTestActions.GET_API_TEST_FOR_PAGE_TWO,
	})
}

export function useGetApiTestById(apiTestId) {
	useAsync({
		url: '/api-test/' + apiTestId, // We have to do a string conncat for now because I can't figure out how to escape a string template properly. Issue: https://github.com/reesemclean/blueprint/issues/69#issuecomment-605670252
		actionType: apiTestActions.GET_API_TEST_BY_ID,
		dependencies: [apiTestId],
	})
}
