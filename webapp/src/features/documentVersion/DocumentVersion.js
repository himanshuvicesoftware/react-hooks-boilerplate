import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import DocumentVersionSidebar from './DocumentVersionSidebar'
import CorrectionDetails from './CorrectionDetails'
import './DocumentVersion.css'

const DocumentVersion = () => {
	return (
		<>
			<Row>
				<Col className='documentVersionHeading'>
					<h2 className='page-title  m-0 font-semi-bold'>[CustomerName]</h2>
					<div className='d-flex align-items-center'>
						<Button variant='outline' size='md' className='ml-auto'>
							Cancel
						</Button>
						<Button variant='primary' size='md' className='font-weight-normal'>
							Save New Version
						</Button>
					</div>
				</Col>
			</Row>
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
