import slice from './profile.slice'

export const selectSlice = (state) => state[slice.name]

export const selectUserProfile = (state) => selectSlice(state).userProfile

export const selectProfileFilter = (state) => selectSlice(state).filter
