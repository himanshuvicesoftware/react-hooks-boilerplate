import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllApiTest } from '../apiTest.selectors'
import { useGetAllApiTest, useGetAllApiTestPageTwo } from '../apiTest.effects'
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { Table, Pagination, Container } from 'react-bootstrap'
// import Axios from 'axios'

function ApiTest() {
	useGetAllApiTest()
	useGetAllApiTestPageTwo()
	const apiData = useSelector(getAllApiTest)
	const [active] = useState(1)
	// const dispatch = useDispatch()

	// const handleClick = (pageNumber) => {
	// 	useGetApiTestForPageTwo()
	// 	setActive(pageNumber)
	// }

	const pageItems = []
	for (let i = 1; i <= 2; i++) {
		pageItems.push(
			<Pagination.Item key={i} active={active === i}>
				{i}
			</Pagination.Item>
		)
	}

	// const [options] = useState({
	// 	defaultSortName: '',
	// 	defaultSortOrder: 'desc',
	// 	sizePerPageList: [
	// 		{
	// 			text: '6',
	// 			value: 6,
	// 		},
	// 		{
	// 			text: '12',
	// 			value: 12,
	// 		},
	// 	],
	// 	sizePerPage: 6,
	// 	pageStartIndex: 1,
	// 	clearSearch: true,
	// })

	return (
		<Container>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Id</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Avatar</th>
					</tr>
				</thead>
				<tbody>
					{apiData &&
						apiData.map((eachData) => (
							<tr key={eachData.id}>
								<td>{eachData.id}</td>
								<td>{eachData.first_name}</td>
								<td>{eachData.last_name}</td>
								<td>{eachData.email}</td>
								<td>
									<img src={eachData.avatar} />
								</td>
							</tr>
						))}
				</tbody>
			</Table>
			<Pagination>{pageItems}</Pagination>
		</Container>
		// <div>
		// 	<BootstrapTable
		// 		data={apiData}
		// 		options={options}
		// 		pagination={true}
		// 		search={true}
		// 		striped
		// 		hover
		// 	>
		// 		<TableHeaderColumn isKey dataField='id' dataSort={true}>
		// 			ID
		// 		</TableHeaderColumn>
		// 		<TableHeaderColumn dataField='first_name' dataSort={true}>
		// 			First Name
		// 		</TableHeaderColumn>
		// 		<TableHeaderColumn dataField='last_name' dataSort={true}>
		// 			Last Name
		// 		</TableHeaderColumn>
		// 		<TableHeaderColumn dataField='email' dataSort={true}>
		// 			Email
		// 		</TableHeaderColumn>
		// 	</BootstrapTable>
		// </div>
	)
}

export default ApiTest
