import React, { useState } from 'react'
import { Form, Col, Card, Image } from 'react-bootstrap'
import Icons from '../../assets/icons'
import './DocumentVersion.css'

const DocumentVersionSidebar = () => {
	const [showSidebar, setShowSidebar] = useState(true)
	return (
		<div className='document-wrapper d-flex position-relative'>
			<aside className='document-sidebar p-15 bg-white border-right bdr-1 bdr-secondry'>
				<div className='d-flex mb-20'>
					{showSidebar ? (
						<Image
							classNameName='side-toggle ml-auto'
							src={Icons.minimizeIcon}
							width='25'
							onClick={() => setShowSidebar(false)}
						/>
					) : (
						<Image
							classNameName='close-log side-toggle'
							src={Icons.maximizeIcon}
							width='25'
							onClick={() => setShowSidebar(true)}
						/>
					)}
				</div>
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
					<Form.Group
						classNameName='mb-15'
						controlId='documentVersionFormTSN_Name'
					>
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
						classNameName='mb-15'
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
			</aside>
		</div>
		// 		{/* </Card.Body>
		// 	</Card>
		// </Col> */}
	)
}

export default DocumentVersionSidebar
