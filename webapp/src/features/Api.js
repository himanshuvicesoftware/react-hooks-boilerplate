import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

const ApiTesting = () => {
	const [apiData, setApiData] = useState(0)
	const [options] = useState({
		defaultSortName: '',
		defaultSortOrder: 'desc',
		sizePerPageList: [
			{
				text: '6',
				value: 6,
			},
			{
				text: '12',
				value: 12,
			},
		],
		sizePerPage: 6,
		pageStartIndex: 1,
	})

	useEffect(() => {
		Axios.get('https://reqres.in/api/users').then((res) => {
			let firstPageData = res.data.data
			if (res && res.data.total_pages > 1) {
				Axios.get('https://reqres.in/api/users?page=2').then((response) => {
					let totalData = [...firstPageData, ...response.data.data]
					setApiData(totalData)
				})
			}
		})
	}, [])

	return (
		<div>
			<BootstrapTable
				data={apiData}
				options={options}
				pagination={true}
				striped
				hover
			>
				<TableHeaderColumn isKey dataField='id' dataSort={true}>
					ID
				</TableHeaderColumn>
				<TableHeaderColumn dataField='first_name' dataSort={true}>
					First Name
				</TableHeaderColumn>
				<TableHeaderColumn dataField='last_name' dataSort={true}>
					Last Name
				</TableHeaderColumn>
				<TableHeaderColumn dataField='email' dataSort={true}>
					Email
				</TableHeaderColumn>
			</BootstrapTable>
		</div>
	)
}

export default ApiTesting
