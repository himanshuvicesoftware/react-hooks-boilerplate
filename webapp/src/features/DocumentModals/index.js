import React from 'react'
import AddNoteModal from './AddNoteModal'
import AssignUserModal from './AssignUserModal'
import CorrectionLogModal from './CorrectionLogModal'
import UploadDocumentModal from './UploadDocumentsModal'
import { DOCUMENT_MODAL_TYPES } from './DocumentModals.contants'

const getSelectedDocumentModal = (modalName) => {
	switch (modalName) {
		case DOCUMENT_MODAL_TYPES.ADD_NOTES_MODAL:
			return <AddNoteModal />
		case DOCUMENT_MODAL_TYPES.ASSIGN_USER_MODAL:
			return <AssignUserModal />
		case DOCUMENT_MODAL_TYPES.CORRECTION_LOG_MODAL:
			return <CorrectionLogModal />
		case DOCUMENT_MODAL_TYPES.UPLOAD_DOC_MODAL:
			return <UploadDocumentModal />
		default:
			return null
	}
}

export default getSelectedDocumentModal
