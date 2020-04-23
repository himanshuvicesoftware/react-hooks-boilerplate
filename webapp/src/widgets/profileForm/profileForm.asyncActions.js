import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

export const fetchAllProfileForm = createAsyncThunk(
	'profileForm/getAll',
	async ({ useCaching, noBusySpinner } = {}, thunkArgs) =>
		await doAsync({
			url: 'profile-form',
			useCaching,
			noBusySpinner,
			successMessage: 'ProfileForm loaded',
			errorMessage: 'Unable to load profileForm. Please try again later.',
			stubSuccess: ['Dummy item 1', 'Dummy item 2'],
			...thunkArgs,
		})
)
