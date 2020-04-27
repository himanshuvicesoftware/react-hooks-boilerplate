import DocumentVersion from './DocumentVersion'
import * as selectors from './documentVersion.selectors'
import * as asyncActions from './documentVersion.asyncActions'
import slice from './documentVersion.slice'

export const {
	name,
	actions: { updateFilter },
	reducer,
} = slice

export const { fetchAllDocumentVersion } = asyncActions

// we prefix all selectors with the the "select" prefix
export const {
	selectAllDocumentVersion,
	selectDocumentVersionFilter,
} = selectors

// we export the component most likely to be desired by default
export default DocumentVersion
