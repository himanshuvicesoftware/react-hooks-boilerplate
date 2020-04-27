import slice from './documentVersion.slice'

export const selectSlice = (state) => state[slice.name]

export const selectAllDocumentVersion = (state) =>
	selectSlice(state).allDocumentVersion

export const selectDocumentVersionFilter = (state) => selectSlice(state).filter
