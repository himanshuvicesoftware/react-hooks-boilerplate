import React from 'react'
import { Row, Image, Col, Card, Button } from 'react-bootstrap'
import Icons from '../../assets/icons'
import getDocumentModal from '../DocumentModals'
import { DOCUMENT_MODAL_TYPES } from '../DocumentModals/DocumentModals.constants'
import { actions } from './documentItem.slice'
import { selectedDocumentModal } from './documentItem.selectors'
import { useSelector, useDispatch } from 'react-redux'
const { setSelectedDocumentModal } = actions

const DocumentDetailsSidebar = () => {
	const selectedModal = useSelector(selectedDocumentModal)

	const dispatch = useDispatch()

	return (
		<Col md={4} lg={3}>
			<Card className='shadow-sm border-0 mb-25'>
				<Card.Body className='p-25'>
					<Card.Title className='font-semi-bold mb-25'>
						Document Details
					</Card.Title>

					<dl className='mb-0 no-gutters'>
						<DocumentDetail property='Creation Date' value='11/01/20' />
						<DocumentDetail property='Expiration Date' value='11/01/2' />
						<DocumentDetail property='Serial Number' value='666-666-666666' />
						<DocumentDetail property='Document Status' value='Transferred' />
						<DocumentDetail property='Version Number' value='2' />
					</dl>

					<div className='bg-secondary opacity-75 separator mt-35 mb-35'></div>

					<DocumentAssignToAndCreatedBy
						title='Document Assigned To'
						username='Code Miles'
						setSelectedDocumentModal={setSelectedDocumentModal}
					/>

					<DocumentAssignToAndCreatedBy
						title='Document Created By'
						username='Code Miles'
					/>

					<div className='bg-secondary opacity-75 separator mt-35 mb-35'></div>

					<Button variant='secondary' size='block'>
						Create New Version
					</Button>
					<Button
						variant='secondary'
						size='block'
						onClick={() =>
							dispatch(
								setSelectedDocumentModal(DOCUMENT_MODAL_TYPES.UPLOAD_DOC_MODAL)
							)
						}
					>
						Upload Files
					</Button>

					<Button
						variant='secondary'
						size='block'
						onClick={() =>
							dispatch(
								setSelectedDocumentModal(DOCUMENT_MODAL_TYPES.ADD_NOTES_MODAL)
							)
						}
					>
						Add Note
					</Button>

					<Button
						variant='outline'
						size='block'
						className='d-flex align-items-center'
						onClick={() =>
							dispatch(
								setSelectedDocumentModal(
									DOCUMENT_MODAL_TYPES.CORRECTION_LOG_MODAL
								)
							)
						}
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
			{selectedModal && getDocumentModal(selectedModal)}
		</Col>
	)
}

const DocumentDetail = ({ property, value }) => (
	<Row className='no-gutters mb-2 align-items-baseline'>
		<Col md={7} className='text-light font-semi-bold'>
			{property}:
		</Col>
		<Col md={5} className='font-weight-normal f-15 mb-0'>
			{value}
		</Col>
	</Row>
)

const DocumentAssignToAndCreatedBy = ({
	title,
	username,
	setSelectedDocumentModal,
}) => {
	const dispatch = useDispatch()
	return (
		<>
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

					{title === 'Document Assigned To' && (
						<a className='d-block ml-auto'>
							<Image
								src={Icons.editIcon}
								width='25'
								onClick={() =>
									dispatch(
										setSelectedDocumentModal(
											DOCUMENT_MODAL_TYPES.ASSIGN_USER_MODAL
										)
									)
								}
							/>
						</a>
					)}
				</div>
			</div>
		</>
	)
}
export default DocumentDetailsSidebar
