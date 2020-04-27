import React from 'react'
import { Form, Col, Card } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import Icons from '../../assets/icons'
const DocumentVersionSidebar = () => (
	<Col md={4} lg={3}>
		<Card className='shadow-sm border-0 mb-25'>
			<Card.Body className='p-25 wrappedClass'>
				<Form>
					<Form.Group controlId='documentVersionFormCustomerName'>
						<Form.Label>Customer Name</Form.Label>
						<Form.Control
							type='text'
							name='customerName'
							placeholder='Enter Customer Name'
						/>
					</Form.Group>
					<Form.Group controlId='documentVersionFormSerialNumber'>
						<Form.Label>Serial Number</Form.Label>
						<Form.Control
							type='email'
							name='serialNumber'
							placeholder='Enter Serial Number'
						/>
					</Form.Group>
					<Form.Group className='mb-15' controlId='documentVersionFormTSN_Name'>
						<Form.Label>TSN Name</Form.Label>
						<Form.Control
							type='text'
							name='TSN_Name'
							placeholder='Enter TSN Name'
						/>
					</Form.Group>
					<Form.Group controlId='documentVersionFormTransferDate'>
						<Form.Label>Transfer Date</Form.Label>
						<Form.Control
							type='text'
							name='transferDate'
							placeholder='Enter Transfer Date'
						/>
						{/* <DatePicker /> */}
					</Form.Group>
					<Form.Group controlId='documentVersionFormCreationDate'>
						<Form.Label>Creation Date</Form.Label>
						<Form.Control
							type='email'
							name='creationDate'
							placeholder='Enter Creation Date'
						/>
						{/* <DatePicker /> */}
					</Form.Group>
					<Form.Group
						className='mb-15'
						controlId='documentVersionFormDocumentStatus'
					>
						<Form.Label>Document Status</Form.Label>
						<Form.Control
							as='select'
							name='documentStatus'
							placeholder='Select Status'
							custom
						>
							<option defaultValue>Select Status</option>
							or Denied.
							<option>Transferred</option>
							<option>Void/No Sale</option>
							<option>Denied</option>
						</Form.Control>
					</Form.Group>
				</Form>
			</Card.Body>
		</Card>
	</Col>
)

export default DocumentVersionSidebar
