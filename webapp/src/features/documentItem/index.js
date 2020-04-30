import DocumentItem from './DocumentItem'
import * as selectors from './documentItem.selectors'
import * as asyncActions from './documentItem.asyncActions'
import slice from './documentItem.slice'

export const {
	name,
	actions: { updateFilter, setSelectedDocumentModal },
	reducer,
} = slice

export const { fetchAllDocumentItem } = asyncActions

// we prefix all selectors with the the "select" prefix
export const { selectAllDocumentItem, selectDocumentItemFilter } = selectors

// we export the component most likely to be desired by default
export default DocumentItem
