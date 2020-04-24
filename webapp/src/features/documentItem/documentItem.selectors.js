import slice from './documentItem.slice'

export const selectSlice = (state) => state[slice.name]

export const selectAllDocumentItem = (state) =>
	selectSlice(state).allDocumentItem

export const selectDocumentItemFilter = (state) => selectSlice(state).filter
