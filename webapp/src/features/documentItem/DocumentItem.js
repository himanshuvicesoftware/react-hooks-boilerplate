import React from 'react'
import DocumentDetailsSidebar from './DocumentDetailsSidebar'
import DocumentHistory from './DocumentHistory'
import FileList from './FileList'
import { Row, Col, Container } from 'react-bootstrap'
import './DocumentItem.css'

const DocumentItem = () => {
	return (
		<>
			<Container fluid>
				<Row className='pt-50 mb-50'>
					<Col md={5} lg={7}>
						<h2 className='page-title  m-0 font-semi-bold'>[CustomerName]</h2>
					</Col>
				</Row>
				<Row>
					<DocumentDetailsSidebar />
					<Col md={8} lg={9}>
						<FileList />
						<DocumentHistory />
					</Col>
				</Row>
			</Container>

			<div className='spacer'></div>
		</>
	)
}

export default DocumentItem
