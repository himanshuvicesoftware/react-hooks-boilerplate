import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

const mockDocumentHistory = [
	{
		id: 1,
		type: 'Attachment File',
		time: '11/01/20 at 11:01 AM',
		detail: 'attachment-file.pdf Uploaded',
	},
	{
		id: 2,
		type: 'Version',
		time: '11/01/20 at 11:01 AM',
		detail: 'Document Version 2 Created',
	},
	{
		id: 3,
		type: 'Note by Cody Miles',
		time: '11/01/20 at 11:01 AM',
		detail: '“Need to Double Check the Serial Number”',
	},
	{
		id: 4,
		type: 'Event',
		time: '11/01/20 at 11:01 AM',
		detail: 'Cody Miles Viewed 4473EID-1029.pdf',
	},
	{
		id: 5,
		type: 'Version',
		time: '11/01/20 at 11:01 AM',
		detail: 'Document Created',
	},
]

const mockAttachments = [
	{
		id: 1,
		fileName: '4473EID-1029.pdf',
		uploadedBy: 'Cody Miles',
		uploadedOn: '11/01/20',
		fileType: '4473',
	},
	{
		id: 2,
		fileName: 'attachment-file.pdf',
		uploadedBy: 'Cody Miles',
		uploadedOn: '11/01/20',
		fileType: 'ATF F 3310.12',
	},
	{
		id: 3,
		fileName: 'attachment-file.pdf',
		uploadedBy: 'Cody Miles',
		uploadedOn: '11/01/20',
		fileType: 'ATF Form-4',
	},
	{
		id: 4,
		fileName: 'attachment-file.pdf',
		uploadedBy: 'Cody Miles',
		uploadedOn: '11/01/20',
		fileType: 'Other',
	},
]

export const fetchAllDocumentItem = createAsyncThunk(
	'documentItem/getAll',
	async ({ useCaching, noBusySpinner } = {}, thunkArgs) =>
		await doAsync({
			url: 'document-item',
			useCaching,
			noBusySpinner,
			successMessage: 'DocumentItem loaded',
			errorMessage: 'Unable to load documentItem. Please try again later.',
			stubSuccess: ['Dummy item 1', 'Dummy item 2'],
			...thunkArgs,
		})
)

export const fetchDocumentHistoryByDocumentId = createAsyncThunk(
	'documentItem/getDocumentHistory',
	async (documentId, thunkArgs, { useCaching, noBusySpinner } = {}) =>
		await doAsync({
			url: `document/${documentId}/history`,
			useCaching,
			noBusySpinner,
			errorMessage: 'Unable to load document history. Please try again later.',
			stubSuccess: mockDocumentHistory,
			...thunkArgs,
		})
)
export const fetchAttachmentsByDocumentId = createAsyncThunk(
	'documentItem/getAttachmentList',
	async (documentId, thunkArgs, { useCaching, noBusySpinner } = {}) =>
		await doAsync({
			url: `document/${documentId}/attachments`,
			useCaching,
			noBusySpinner,
			errorMessage: 'Unable to load attachments. Please try again later.',
			stubSuccess: mockAttachments,
			...thunkArgs,
		})
)

export const fetchDocumentItemCorrectionLog = createAsyncThunk(
	'documentItem/getCorrectionLogs',
	async (documentId, thunkArgs, { useCaching, noBusySpinner } = {}) =>
		await doAsync({
			url: `documentItem/${documentId}/getCorrectionLogs`,
			useCaching,
			noBusySpinner,
			errorMessage: 'Unable to load documentItem. Please try again later.',
			stubSuccess: [
				{
					descriptionOfChange: 'Corrected Military Identification',
					user: 'Cody Miles',
					initialDate: '12/12/2020',
				},
				{
					descriptionOfChange: 'Corrected Military Identification',
					user: 'Cody Miles',
					initialDate: '12/12/2020',
				},
				{
					descriptionOfChange: 'Corrected Military Identification',
					user: 'Cody Miles',
					initialDate: '12/12/2020',
				},
			],
			...thunkArgs,
		})
)
