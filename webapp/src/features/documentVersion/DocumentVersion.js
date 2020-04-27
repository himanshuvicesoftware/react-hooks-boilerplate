import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import './DocumentVersion.css'
const DocumentVersion = () => {
	return (
		<>
			<Container fluid>
				<Row className='pt-50 mb-50'>
					<Col md={5} lg={7}>
						<h2 className='page-title  m-0 font-semi-bold'>[CustomerName]</h2>
					</Col>
				</Row>
				<Row>
					Document Inputs
					<Col md={8} lg={9}>
						Document PDF
					</Col>
				</Row>
			</Container>
			<div className='spacer'></div>
		</>
	)
}
export default DocumentVersion
