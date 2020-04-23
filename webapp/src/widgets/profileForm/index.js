import ProfileForm from './ProfileForm'
import * as selectors from './profileForm.selectors'
import * as asyncActions from './profileForm.asyncActions'
import slice from './profileForm.slice'

export const {
	name,
	actions: { updateFilter },
	reducer,
} = slice

export const { fetchAllProfileForm } = asyncActions

// we prefix all selectors with the the "select" prefix
export const { selectAllProfileForm, selectProfileFormFilter } = selectors

// we export the component most likely to be desired by default
export default ProfileForm
