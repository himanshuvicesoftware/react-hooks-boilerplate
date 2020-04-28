import slice from './documentArchive.slice'

export const selectSlice = (state) => state[slice.name]

export const selectAllDocumentArchive = (state) =>
	selectSlice(state).allDocumentArchive

export const selectDocumentArchiveFilter = (state) => selectSlice(state).filter
