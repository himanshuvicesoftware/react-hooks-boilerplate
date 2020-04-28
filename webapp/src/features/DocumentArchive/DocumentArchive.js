import React from 'react'
import DocumentArchiveTable from './DocumentArchiveTable'
import DocumentArchiveFilter from './DocumentArchiveFilter'
import DocumentArchiveSearch from './DocumentArchiveSearch'
import CustomDatePicker from '../DatePicker'
import { Container, Row, Col, Button } from 'react-bootstrap'

const DocumentArchive = () => {
	return (
		<Container fluid>
			<Row>
				<Col lg={7} md={5}>
					<h2 className='page-title'>Documents</h2>
				</Col>
				<Col lg={2} md={3}>
					<Button className='btn-block' type='button' variant='secondary'>
						Assign
					</Button>
				</Col>
				<Col lg={3} md={4}>
					<CustomDatePicker />
				</Col>
			</Row>
			<Row>
				<Col md={4} lg={3}>
					<DocumentArchiveFilter />
					<DocumentArchiveSearch />
				</Col>
				<Col lg={9} md={8}>
					<DocumentArchiveTable />
				</Col>
			</Row>
		</Container>
	)
}

export default DocumentArchive
