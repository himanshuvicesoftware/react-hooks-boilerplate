export const getUserInitialsFromFullName = (name) => {
	const listOfUserInitials = name.split(' ')
	const POS_FIRST_NAME = 0
	const POS_FIRST_CHAR = 0
	const firstName = listOfUserInitials[POS_FIRST_NAME][POS_FIRST_CHAR]
	const lastName =
		listOfUserInitials[listOfUserInitials.length - 1][POS_FIRST_CHAR]
	return `${firstName}${lastName}`
}
