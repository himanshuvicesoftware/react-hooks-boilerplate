import DocumentArchive from './DocumentArchive'
import * as selectors from './documentArchive.selectors'
import * as asyncActions from './documentArchive.asyncActions'
import slice from './documentArchive.slice'

export const {
	name,
	actions: { updateFilter },
	reducer,
} = slice

export const { fetchAllDocumentArchive } = asyncActions

// we prefix all selectors with the the "select" prefix
export const {
	selectAllDocumentArchive,
	selectDocumentArchiveFilter,
} = selectors

// we export the component most likely to be desired by default
export default DocumentArchive
