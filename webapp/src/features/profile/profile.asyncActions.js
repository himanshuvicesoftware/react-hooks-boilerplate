import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

export const fetchAllProfile = createAsyncThunk(
	'profile/getAll',
	async ({ useCaching, noBusySpinner } = {}, thunkArgs) =>
		await doAsync({
			url: 'profile',
			useCaching,
			noBusySpinner,
			successMessage: 'Profile loaded',
			errorMessage: 'Unable to load profile. Please try again later.',
			stubSuccess: ['Dummy item 1', 'Dummy item 2'],
			...thunkArgs,
		})
)
