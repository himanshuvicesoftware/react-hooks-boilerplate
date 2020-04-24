import React from 'react'
import AssignUserModal from '../widgets/AssignUserModal/AssignUserModal'
import AddNote from '../widgets/AddNoteModal/AddNoteModal'

export default function Home() {
	return (
		<div>
			<h2>Vice Software Boilerplate</h2>
			<p>
				Created by{' '}
				<a href='http://www.vicesoftware.com' target='new'>
					Vice Software, LLC
				</a>{' '}
				to enable high velocity developement and easy maintenace. See details{' '}
				<a
					href='https://github.com/vicesoftware/react-redux-hooks-boilerplate'
					target='new'
				>
					here
				</a>
				.
			</p>
			<AssignUserModal />
			<AddNote />
		</div>
	)
}
