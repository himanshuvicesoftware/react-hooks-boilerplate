import React, { Fragment } from 'react'
import { Row, Image, Col, Card, Button } from 'react-bootstrap'
import Icons from '../../assets/index'

export default function DocumentDetail() {
	return (
		<Fragment>
			<Col md={4} lg={3}>
				<Card className='shadow-sm border-0 mb-25'>
					<Card.Body className='p-25'>
						<Card.Title className='font-semi-bold mb-25'>
							Document Details
						</Card.Title>

						<dl className='mb-0 no-gutters'>
							<DocumentDetailProp property='Creation Date' value='11/01/20' />
							<DocumentDetailProp property='Expiration Date' value='11/01/2' />
							<DocumentDetailProp
								property='Serial Number'
								value='666-666-666666'
							/>
							<DocumentDetailProp
								property='Document Status'
								value='Transferred'
							/>
							<DocumentDetailProp property='Version Number' value='2' />
						</dl>

						<div className='bg-secondary opacity-75 separator mt-35 mb-35'></div>

						<DocumentAssignToAndCreatedBy
							title='Document Assigned To'
							username='Code Miles'
						/>

						<DocumentAssignToAndCreatedBy
							title='Document Created By'
							username='Code Miles'
						/>

						<div className='bg-secondary opacity-75 separator mt-35 mb-35'></div>

						<Button variant='secondary' size='block'>
							Create New Version
						</Button>
						<Button variant='secondary' size='block'>
							Upload Files
						</Button>
						<Button variant='secondary' size='block'>
							Add Note
						</Button>

						<Button
							variant='outline'
							size='block'
							className='d-flex align-items-center'
						>
							View Correction Log
							<Image className='ml-auto' src={Icons.logIcon} width='25' />
						</Button>
						<Button
							variant='outline'
							size='block'
							className='d-flex align-items-center'
						>
							Flag Document
							<Image className='ml-auto' src={Icons.flagIcon} width='25' />
						</Button>
						<Button
							variant='outline'
							size='block'
							className='d-flex align-items-center'
						>
							Export Document
							<Image className='ml-auto' src={Icons.downloadIcon} width='25' />
						</Button>
						<Button
							variant='outline'
							size='block'
							className='d-flex align-items-center'
						>
							Export History
							<Image className='ml-auto' src={Icons.downloadIcon} width='25' />
						</Button>
					</Card.Body>
				</Card>
			</Col>
		</Fragment>
	)
}

export function DocumentDetailProp({ property, value }) {
	return (
		<Fragment>
			<Row className='no-gutters mb-2 align-items-baseline'>
				<Col md={7} className='text-light font-semi-bold'>
					{property}:
				</Col>
				<Col md={5} className='font-weight-normal f-15 mb-0'>
					{value}
				</Col>
			</Row>
		</Fragment>
	)
}

export function DocumentAssignToAndCreatedBy({ title, username }) {
	return (
		<div className='mb-15'>
			<h6 className='text-light font-semi-bold mb-1'>{title}</h6>
			<div className='d-flex'>
				<div className='d-flex align-items-center '>
					<div className='user-circle d-inline-block position-relative rounded-circle'>
						<Image src={Icons.circleIcon} width='25' />
						<div className='position-absolute user-name font-weight-normal'>
							CM
						</div>
					</div>
					<span className='f-15 ml-2 '>{username}</span>
				</div>

				{title === 'Document Assigned To' ? (
					<a href='/#' className='d-block ml-auto'>
						<Image src={Icons.editIcon} width='25' />
					</a>
				) : null}
			</div>
		</div>
	)
}
