import slice from './documentItem.slice'

export const selectSlice = (state) => state[slice.name]

export const selectAllDocumentItem = (state) =>
	selectSlice(state).allDocumentItem

export const selectDocumentItemFilter = (state) => selectSlice(state).filter

export const selectedDocumentModal = (state) =>
	selectSlice(state).selectedDocumentModal

export const selectDocumentHistory = (state) =>
	selectSlice(state).documentHistory

export const selectAttachments = (state) => selectSlice(state).attachments

export const selectDocumentItemCorrectionLog = (state) =>
	selectSlice(state).documentItemCorrectionLog
