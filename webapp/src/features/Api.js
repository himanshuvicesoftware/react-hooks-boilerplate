import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

const ApiTesting = () => {
	const [apiData, setApiData] = useState(0)
	const [options] = useState({
		defaultSortName: '',
		defaultSortOrder: 'desc',
	})

	useEffect(() => {
		Axios.get('https://reqres.in/api/users').then((res) => setApiData(res.data))
	}, [])

	return (
		<div>
			<BootstrapTable
				data={apiData.data}
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
