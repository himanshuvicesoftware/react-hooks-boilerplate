import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import DocumentVersionHeader from './DocumentVersionHeader'
import DocumentVersionSidebar from './DocumentVersionSidebar'
import CorrectionDetails from './CorrectionDetails'
import './DocumentVersion.css'

const DocumentVersion = () => {
	return (
		<>
			<DocumentVersionHeader />
			<Row>
				<DocumentVersionSidebar />
				<Col md={8} lg={9}>
					Document PDF
					<CorrectionDetails />
				</Col>
			</Row>
			<div className='spacer'></div>
		</>
	)
}
export default DocumentVersion
