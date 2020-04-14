import React from 'react'
import { useGetUsers } from '../usersAPI.effects'
import UserTable from './UserTable'

function UserAPI() {
	useGetUsers()
	return (
		<div>
			Users API
			<UserTable />
		</div>
	)
}

export default UserAPI
