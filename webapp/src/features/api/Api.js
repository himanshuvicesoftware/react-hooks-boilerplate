import React, { useEffect, useState } from 'react'
import axios from 'axios'
import JSPDF from 'jspdf'

var pdfGen
var pdfArr

export function Api() {
	const [data, setData] = useState([])

	const [firstname, setFirstName] = useState('')
	const [lastname, setLastName] = useState('')
	useEffect(() => {
		axios.get('https://reqres.in/api/users').then((res) => {
			setData(res.data.data)

			pdfGen = res.data.data

			pdfArr = pdfGen.map((key) => {
				return (
					key.id.toString() +
					'  ' +
					key.email +
					'  ' +
					key.first_name +
					'  ' +
					key.last_name
				)
			})
		})
	})

	const handleChangeFirstName = (event) => {
		setFirstName(event.target.value)
	}
	const filterFName = data.filter((fname) => {
		return (
			fname.first_name.toLowerCase().indexOf(firstname.toLowerCase()) !== -1 ||
			fname.last_name.toLowerCase().indexOf(lastname.toLowerCase()) !== -1
		)
	})
	const handleChangeLastName = (event) => {
		setLastName(event.target.value)
	}
	const jsfPdfCreator = () => {
		var doc = new JSPDF()

		doc.text(40, 10, pdfArr)

		doc.save('generated.pdf')
	}

	return (
		<div>
			<table border='1'>
				<tr>
					<th>id</th>
					<th>email</th>
					<th>first_name</th>
					<th>last_name</th>
				</tr>

				{filterFName.map((res) => (
					<tr key={res.id}>
						<td>{res.id}</td>
						<td>{res.email}</td>
						<td>{res.first_name}</td>
						<td>{res.last_name}</td>
					</tr>
				))}
			</table>

			<label> Filter by First Name</label>
			<select onChange={handleChangeFirstName}>
				<option>Georges</option>
				<option>Janet</option>
				<option>Emma</option>
				<option>Eve </option>
				<option>Charles</option>
				<option>Tracey</option>
			</select>

			<form onChange={handleChangeLastName}>
				<label> Filter by Last Name</label>
				<select>
					<option>Bluth</option>
					<option>Weaver</option>
					<option>Wong</option>
					<option>Holt </option>
					<option>Morris</option>
					<option>Ramos</option>
				</select>
			</form>
			<button onClick={jsfPdfCreator}>Download Pdf</button>
		</div>
	)
}
