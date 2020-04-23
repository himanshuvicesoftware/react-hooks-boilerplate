import slice from './profileForm.slice'

export const selectSlice = (state) => state[slice.name]

export const selectAllProfileForm = (state) => selectSlice(state).allProfileForm

export const selectProfileFormFilter = (state) => selectSlice(state).filter
