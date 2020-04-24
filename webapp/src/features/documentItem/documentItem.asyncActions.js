import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

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
