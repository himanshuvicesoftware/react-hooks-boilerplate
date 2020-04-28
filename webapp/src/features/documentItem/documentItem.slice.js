import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './documentItem.asyncActions'

const initialState = {
	allDocumentItem: [],
	filter: '',
	selectedDocumentModal: null,
	documentHistory: [],
}

const slice = createSlice({
	name: 'documentItem',
	initialState,
	reducers: {
		// synchronous actions
		updateFilter(state, action) {
			state.filter = action.payload
		},
		setSelectedDocumentModal(state, action) {
			state.selectedDocumentModal = action.payload
		},
	},
	extraReducers: {
		[asyncActions.fetchDocumentHistoryByDocumentId.fulfilled]: (
			state,
			action
		) => {
			state.documentHistory = action.payload
		},
	},
})

export default slice

export const { name, actions, reducer } = slice
