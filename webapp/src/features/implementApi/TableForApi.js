import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import $ from 'jquery'
import { Table } from 'react-bootstrap'

export function TableForApi() {
	const [apidata, setApiData] = useState([])
	useEffect(() => {
		axios
			.get('https://reqres.in/api/users?page=1')
			.then((res) => {
				setApiData(res.data.data)
			})
			// .then((r) => {
			// 	$('#search').on('keyup', function () {
			// 		var value = $(this).val().toLowerCase()
			// 		$('.table tr').filter(function () {
			// 			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			// 		})
			// 	})
			// })
			// TODO	// .then(() => {
			// 	// var input = document.getElementById('myInput')
			// 	const table = document.getElementById('myTable')
			// 	const tr = table.getElementsByTagName('tr')
			// 	const input1 = document.querySelector('input')

			// 	input1.addEventListener('input', () => {
			// 		let td, cell
			// 		console.log(cell, 'dhsghgfchvfdhscvbndsvzxbnd')
			// 		const input = document.getElementById('myInput')
			// 		const filter = input.value.toUpperCase()
			// 		for (let i = 1; i < tr.length; i++) {
			// 			// Hide the row initially.
			// 			tr[i].style.display = 'none'

			// 			td = tr[i].getElementsByTagName('td')
			// 			for (var j = 0; j < td.length; j++) {
			// 				cell = tr[i].getElementsByTagName('td')[j]
			// 				if (cell) {
			// 					if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
			// 						tr[i].style.display = ''
			// 						break
			// 					}
			// 				}
			// 			}
			// 		}
			// 	})
			// })
			.catch((err) => {
				console.log(err, 'Table.js')
			})
	})

	// function myFunction() {
	// 	var input, filter, table, tr, td, cell, i
	// 	input = document.getElementById('myInput')
	// 	filter = input.value.toUpperCase()
	// 	// table = document.getElementById('myTable')
	// 	// tr = table.getElementsByTagName('tr')
	// 	for (i = 1; i < tr.length; i++) {
	// 		// Hide the row initially.
	// 		tr[i].style.display = 'none'

	// 		td = tr[i].getElementsByTagName('td')
	// 		for (var j = 0; j < td.length; j++) {
	// 			cell = tr[i].getElementsByTagName('td')[j]
	// 			if (cell) {
	// 				if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
	// 					tr[i].style.display = ''
	// 					break
	// 				}
	// 			}
	// 		}
	// 	}
	// }

	return (
		<>
			{/* <input
				id='search'
				type='text'
				className='form-control'
				placeholder='Search!!'
			></input> */}
			{
				<input
					type='text'
					id='myInput'
					placeholder='Search for names..'
					title='Type in a name'
				></input>
			}

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
