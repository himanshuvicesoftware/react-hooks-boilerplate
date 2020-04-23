import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './profile.asyncActions'

const initialState = {
	allProfile: [],
	filter: '',
}

const slice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		// synchronous actions
		updateFilter(state, action) {
			state.filter = action.payload
		},
	},
	extraReducers: {
		// asynchronous actions
		[asyncActions.fetchAllProfile.fulfilled]: (state, action) => {
			state.allProfile = action.payload
		},
	},
})

export default slice

export const { name, actions, reducer } = slice
