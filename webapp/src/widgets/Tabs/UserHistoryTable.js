import React from 'react'
import { Table } from 'react-bootstrap'
import './UserHistoryTable.css'
import userthumb from './user-thumb.jpg'
const UserHistoryTable = (props) => {
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
						<td>
							<div>
								<img src={userthumb} width='30' />
							</div>
							<span>{props.Name}</span>
						</td>
						<td>{props.Permission}</td>
						<td>{props.Last_Sign_In}</td>
						<td>{props.User_Status}</td>
					</tr>
					<tr>
						<td>
							<div>
								<img src={userthumb} width='30' />
							</div>
							<span>{props.Name}</span>
						</td>
						<td>{props.Permission}</td>
						<td>{props.Last_Sign_In}</td>
						<td>{props.User_Status}</td>
					</tr>
					<tr>
						<td>
							<div>
								<img src={userthumb} width='30' />
							</div>
							<span>{props.Name}</span>
						</td>
						<td>{props.Permission}</td>
						<td>{props.Last_Sign_In}</td>
						<td>{props.User_Status}</td>
					</tr>
					<tr>
						<td>
							<div>
								<img src={userthumb} width='30' />
							</div>
							<span>{props.Name}</span>
						</td>
						<td>{props.Permission}</td>
						<td>{props.Last_Sign_In}</td>
						<td>{props.User_Status}</td>
					</tr>
				</tbody>
			</Table>
		</div>
	)
}
export default UserHistoryTable
