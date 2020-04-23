import Profile from './Profile'
import * as selectors from './profile.selectors'
import * as asyncActions from './profile.asyncActions'
import slice from './profile.slice'

export const {
	name,
	actions: { updateFilter },
	reducer,
} = slice

export const { fetchAllProfile } = asyncActions

// we prefix all selectors with the the "select" prefix
export const { selectAllProfile, selectProfileFilter } = selectors

// we export the component most likely to be desired by default
export default Profile
