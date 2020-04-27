import React from 'react'
import ReportCard from '../widgets//ReportCard//ReportCards'
import ControlledTabs from '../widgets/Tabs/ControlledTabs'
export function Home() {
	return (
		<div style={{ backgroundColor: 'grey' }}>
			<div
				style={{ display: 'flex', marginLeft: '-15px', marginRight: '-15px' }}
			>
				<ReportCard totalDocuments='124' documentType='Total Documents' />
				<ReportCard totalDocuments='3' documentType='Flagged Documents' />
				<ReportCard totalDocuments='3' documentType='Assigned to me' />
				<ReportCard totalDocuments='12' documentType='Total users' />
				<ReportCard totalDocuments='3' documentType='Active now' />
			</div>
			<div>
				<ControlledTabs />
			</div>
		</div>
	)
}
export default Home
