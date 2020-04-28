import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

export const fetchAllDocumentArchive = createAsyncThunk(
	'documentArchive/getAll',
	async ({ useCaching, noBusySpinner } = {}, thunkArgs) =>
		await doAsync({
			url: 'document-archive',
			useCaching,
			noBusySpinner,
			successMessage: 'Document Archive loaded',
			errorMessage: 'Unable to load document archive. Please try again later.',
			stubSuccess: ['Dummy item 1', 'Dummy item 2'],
			...thunkArgs,
		})
)
