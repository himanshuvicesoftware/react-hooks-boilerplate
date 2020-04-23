import slice from './profile.slice'

export const selectSlice = (state) => state[slice.name]

export const selectAllProfile = (state) => selectSlice(state).allProfile

export const selectProfileFilter = (state) => selectSlice(state).filter
