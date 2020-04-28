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
	'documentItem/getDocumentHistory/:documentId',
	async ({ useCaching, noBusySpinner } = {}, thunkArgs) =>
		await doAsync({
			url: 'document-item',
			useCaching,
			noBusySpinner,
			errorMessage: 'Unable to load document history. Please try again later.',
			stubSuccess: mockDocumentHistory,
			...thunkArgs,
		})
)
