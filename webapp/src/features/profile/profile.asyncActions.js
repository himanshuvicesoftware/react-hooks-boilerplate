import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

export const fetchAllProfile = createAsyncThunk(
	'profile/id',
	async ({ useCaching, noBusySpinner } = {}, thunkArgs, id) =>
		await doAsync({
			url: `profile/${id}`,
			useCaching,
			noBusySpinner,
			errorMessage: 'Unable to load profile. Please try again later.',
			stubSuccess: {
				id: 1,
				name: 'First User',
				email: 'FirstUser@test.com',
				phone: 1234567890,
				uri: '',
			},
			...thunkArgs,
		})
)
