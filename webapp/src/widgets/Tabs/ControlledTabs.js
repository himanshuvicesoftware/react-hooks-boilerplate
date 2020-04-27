import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import './ControlledTabs.css'
import BootstrapTable from 'react-bootstrap-table-next'
import './Table.css'
import './UserHistoryTable.css'
function ControlledTabs() {
	const [key, setKey] = useState('User History')
	const columnsUserHistory = [
		{
			dataField: 'User_name',
			text: 'Name',
		},
		{
			dataField: 'User_permission',
			text: 'Permission',
		},
		{
			dataField: 'Last_Sign_In',
			text: 'Last Sign In',
		},
		{
			dataField: 'User_Status',
			text: 'User Status',
		},
	]
	const users = [
		{
			User_name: 'cody miles',
			User_permission: 'Admin',
			Last_Sign_In: 'yesterday at 11:00 PM',
			User_Status: 'Enabled',
		},
		{
			User_name: 'cody miles',
			User_permission: 'Admin',
			Last_Sign_In: 'yesterday at 11:00 PM',
			User_Status: 'Enabled',
		},
		{
			User_name: 'cody miles',
			User_permission: 'Admin',
			Last_Sign_In: 'yesterday at 11:00 PM',
			User_Status: 'Enabled',
		},
	]
	const columnsExpiringDocuments = [
		{
			dataField: 'customer_name',
			text: 'Customer Name',
		},
		{
			dataField: 'creation',
			text: 'Creation',
		},
		{
			dataField: 'expiration',
			text: 'Expiration',
		},
		{
			dataField: 'serial_number',
			text: 'Serial Number',
		},
		{
			dataField: 'assigned',
			text: 'Assigned',
		},
		{
			dataField: 'status',
			text: 'Status',
		},
		{
			dataField: 'tsn',
			text: 'TSN',
		},
		{
			dataField: 'flagged_by',
			text: 'Flagged By',
		},
	]

	return (
		<div className='container'>
			<Tabs
				id='controlled-tab-example'
				activeKey={key}
				onSelect={(k) => setKey(k)}
			>
				<Tab eventKey='User History' title='User History '>
					<BootstrapTable
						keyField='name'
						data={users}
						columns={columnsUserHistory}
						bordered={false}
						striped={true}
					/>
				</Tab>
				<Tab eventKey='Expiring Documents' title=' Expiring Documents'>
					<BootstrapTable
						keyField='name'
						data={users}
						columns={columnsExpiringDocuments}
						bordered={false}
						striped={true}
					/>
				</Tab>
				<Tab eventKey='Flagged Documents' title='Flagged Documents'>
					contact
				</Tab>
				<Tab eventKey='Correction Log' title='Correction Log'>
					Correction log
				</Tab>
				<Tab eventKey='Assigned to Me' title='Assigned to Me'>
					Assigned to Me
				</Tab>
			</Tabs>
		</div>
	)
}
export default ControlledTabs
