import React from 'react'
import { Table } from 'react-bootstrap'
import './UserHistoryTable.css'
function UserHistoryTable() {
	return (
		<div>
			<Table responsive={true} borderless={true}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Permission</th>
						<th>Last Sign In</th>
						<th>User Status</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Cody Miles</td>
						<td>Admin</td>
						<td>Yesterday at 11:00pm</td>
						<td>enabled</td>
					</tr>
					<tr>
						<td>Cody Miles</td>
						<td>Admin</td>
						<td>Yesterday at 11:00pm</td>
						<td>enabled</td>
					</tr>
					<tr>
						<td>Cody Miles</td>
						<td>Admin</td>
						<td>Yesterday at 11:00pm</td>
						<td>enabled</td>
					</tr>
					<tr>
						<td>Cody Miles</td>
						<td>Admin</td>
						<td>Yesterday at 11:00pm</td>
						<td>enabled</td>
					</tr>
				</tbody>
			</Table>
		</div>
	)
}
export default UserHistoryTable
