import React, { Fragment } from 'react'
import DocumentDetail from './DocumentDetail'
import DocumentHistory from './DocumentHistory'
import FileList from './FileList'
import { Row, Col, Container } from 'react-bootstrap'
import './DocumentItem.css'

export default function DocumentItem() {
	return (
		<Fragment>
			<Container fluid>
				<Row className='pt-50 mb-50'>
					<Col md={5} lg={7}>
						<h2 className='page-title  m-0 font-semi-bold'>[CustomerName]</h2>
					</Col>
				</Row>
				<Row>
					<DocumentDetail />
					<Col md={8} lg={9}>
						<FileList />
						<DocumentHistory />
					</Col>
				</Row>
			</Container>

			<div className='spacer'></div>
		</Fragment>
	)
}
