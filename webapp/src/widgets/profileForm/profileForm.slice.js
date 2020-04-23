import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './profileForm.asyncActions'

const initialState = {
	allProfileForm: [],
	filter: '',
}

const slice = createSlice({
	name: 'profileForm',
	initialState,
	reducers: {
		// synchronous actions
		updateFilter(state, action) {
			state.filter = action.payload
		},
	},
	extraReducers: {
		// asynchronous actions
		[asyncActions.fetchAllProfileForm.fulfilled]: (state, action) => {
			state.allProfileForm = action.payload
		},
	},
})

export default slice

export const { name, actions, reducer } = slice
