import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './documentArchive.asyncActions'

const initialState = {
	allDocumentArchive: [],
	filter: '',
}

const slice = createSlice({
	name: 'documentArchive',
	initialState,
	reducers: {
		// synchronous actions
		updateFilter(state, action) {
			state.filter = action.payload
		},
	},
	extraReducers: {
		// asynchronous actions
		[asyncActions.fetchAllDocumentArchive.fulfilled]: (state, action) => {
			state.allDemo = action.payload
		},
	},
})

export default slice

export const { name, actions, reducer } = slice
