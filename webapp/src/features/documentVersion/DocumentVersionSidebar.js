import React from 'react'
import { Form, Image } from 'react-bootstrap'
import Icons from '../../assets/icons'
import './DocumentVersion.css'

const DocumentVersionSidebar = ({ showSidebar, setShowSidebar }) => (
	<aside className='document-sidebar p-15 bg-white border-right bdr-1 bdr-secondry'>
		<div className='d-flex mb-20'>
			<span
				className='side-toggle ml-auto'
				onClick={() => setShowSidebar(!showSidebar)}
			>
				<Image src={showSidebar ? Icons.minimizeIcon : Icons.maximizeIcon} />
			</span>
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
				<div className='position-relative delete-control'>
					<Image
						src={Icons.deleteIcon}
						className='deleteIcon position-absolute'
						alt='delete-icon'
						width='20'
					/>
				</div>
				<Form.Control
					type='email'
					name='serialNumber'
					placeholder='Enter Serial Number'
				/>
			</Form.Group>
			<Form.Group>
				<span className='d-flex align-items-center text-secondary py-1'>
					<Image src={Icons.plusIcon} alt='' width='20' />
					<span className='f-12 ml-2'>Add Serial Number</span>
				</span>
			</Form.Group>
			<Form.Group classNameName='mb-15' controlId='documentVersionFormTSN_Name'>
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
					className='calender-input'
				/>
				<Image
					src={Icons.calendarIcon}
					className='calender-icon'
					alt='calender-icon'
					width='20'
				/>
			</Form.Group>
			<Form.Group controlId='documentVersionFormCreationDate'>
				<Form.Label>Creation Date</Form.Label>
				<Form.Control
					type='email'
					name='creationDate'
					placeholder='Enter Creation Date'
					className='calender-input'
				/>
				<Image
					className='calender-icon'
					src={Icons.calendarIcon}
					alt='calender-icon'
					width='20'
				/>
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
					<option>Transferred</option>
					<option>Void/No Sale</option>
					<option>Denied</option>
				</Form.Control>
			</Form.Group>
		</Form>
	</aside>
)

export default DocumentVersionSidebar
