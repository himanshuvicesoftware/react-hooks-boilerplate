import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './profile.asyncActions'

const initialState = {
	userProfile: [],
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
		[asyncActions.fetchAllProfile.fulfilled]: (state, action) => {
			state.userProfile = action.payload[0]
		},
	},
})

export default slice

export const { name, actions, reducer } = slice
