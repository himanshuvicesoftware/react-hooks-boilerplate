import React, { useEffect, useState } from 'react'
import axios from 'axios'
import $ from 'jquery'
import { Table } from 'react-bootstrap'

export function TableForApi() {
	const [apidata, setApiData] = useState([])
	useEffect(() => {
		axios
			.get('https://reqres.in/api/users?page=1')
			.then((res) => {
				setApiData(res.data.data)
				console.log(res)
			})
			.then((r) => {
				$('#search').on('keyup', function () {
					var value = $(this).val().toLowerCase()
					$('.table tr').filter(function () {
						$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
					})
				})
			})
			.catch((err) => {
				console.log(err, 'Table.js')
			})
	})

	return (
		<>
			<input
				id='search'
				type='text'
				className='form-control'
				placeholder='Search!!'
			></input>
			<Table striped bordered hover className='table'>
				<thead>
					<tr>
						<th>Id</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{apidata.map((response) => (
						<tr key={response.id}>
							<td>{response.id}</td>
							<td>{response.first_name}</td>
							<td>{response.last_name}</td>
							<td>{response.email}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	)
}
