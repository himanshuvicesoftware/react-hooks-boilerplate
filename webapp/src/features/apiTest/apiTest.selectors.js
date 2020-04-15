export const getAllApiTest = (state) => state.apiTest.allApiTest
export const getApiTestById = (apiTestId) => (state) =>
	state.apiTest.allApiTest.find((item) => item.id === apiTestId)
