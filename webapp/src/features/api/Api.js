import React, { useEffect, useState } from 'react'
import axios from 'axios'
export function Api() {
	const [data, setData] = useState([])
	const [cpage, setCPage] = useState(1)
	const [postpage, setPostPage] = useState(6)
	useEffect(() => {
		axios.get('https://reqres.in/api/users').then((res) => {
			console.log(res)
			setData(res.data.data)
		})
	})
	const lastPost = cpage * postpage
	const firstPost = lastPost - postpage
	const currentpost = data.slice(firstPost, lastPost)

	return (
		<div>
			<table border='1'>
				<tr>
					<th>id</th>
					<th>email</th>
					<th>first_name</th>
					<th>last_name</th>
				</tr>

				{currentpost.map((res) => (
					<tr key={res.id}>
						<td>{res.id}</td>
						<td>{res.email}</td>
						<td>{res.first_name}</td>
						<td>{res.last_name}</td>
					</tr>
				))}
			</table>
		</div>
	)
}
