import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import UserHistoryTable from './UserHistoryTable'
import './ControlledTabs.css'

function ControlledTabs() {
	const [key, setKey] = useState('User History')
	return (
		<div className='container'>
			<Tabs
				id='controlled-tab-example'
				activeKey={key}
				onSelect={(k) => setKey(k)}
			>
				<Tab eventKey='User History' title='User History '>
					<UserHistoryTable />
				</Tab>
				<Tab eventKey='Expiring Documents' title=' Flagged Documents'>
					Flagged Documents
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
