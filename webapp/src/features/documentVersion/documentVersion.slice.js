import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './documentVersion.asyncActions'

const initialState = {
	allDocumentVersion: [],
	filter: '',
}

const slice = createSlice({
	name: 'documentVersion',
	initialState,
	reducers: {
		// synchronous actions
		updateFilter(state, action) {
			state.filter = action.payload
		},
	},
	extraReducers: {
		// asynchronous actions
		[asyncActions.fetchAllDocumentVersion.fulfilled]: (state, action) => {
			state.allDocumentVersion = action.payload
		},
	},
})

export default slice

export const { name, actions, reducer } = slice
