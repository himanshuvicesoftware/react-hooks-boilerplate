import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import './DocumentVersion.css'

const DocumentVersionHeader = () => (
	<div className='border-top border-bottom py-25 px-15  bdr-1 bdr-secondry bg-white'>
		<Row>
			<Col xl={8} lg={6} md={5} sm={12} class='mb-3 mb-md-0'>
				<h2 className='m-0 font-semi-bold'>[CustomerName]</h2>
			</Col>
			<Col xl={2} lg={3} md={3} sm={6}>
				<Button variant='outline' size='md' className='btn-block mb-3 mb-sm-0'>
					Cancel
				</Button>
			</Col>
			<Col xl={2} lg={3} md={4} sm={6}>
				<Button variant='primary' size='md' className='btn-block'>
					Save New Version
				</Button>
			</Col>
		</Row>
	</div>
)

export default DocumentVersionHeader
