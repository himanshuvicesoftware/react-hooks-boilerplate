import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

export const fetchAllDocumentVersion = createAsyncThunk(
	'documentVersion/getAll',
	async ({ useCaching, noBusySpinner } = {}, thunkArgs) =>
		await doAsync({
			url: 'document-version',
			useCaching,
			noBusySpinner,
			successMessage: 'DocumentVersion loaded',
			errorMessage: 'Unable to load documentVersion. Please try again later.',
			stubSuccess: ['Dummy item 1', 'Dummy item 2'],
			...thunkArgs,
		})
)
