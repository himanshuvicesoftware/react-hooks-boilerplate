import React, { useState, useEffect } from 'react'
import {
	Button,
	ProgressBar,
	Card,
	Image,
	Form,
	ListGroup,
} from 'react-bootstrap'
import Dropzone from 'react-dropzone'
import { useDispatch } from 'react-redux'
import Modal, { showModal, hideModal } from '../../widgets/modal'
import Icons from '../../assets/icons'
import { actions } from '../documentItem/documentItem.slice'
const { setSelectedDocumentModal } = actions

const UploadDocuments = () => {
	const dispatch = useDispatch()
	const resetModal = () => dispatch(setSelectedDocumentModal(null))

	useEffect(() => {
		dispatch(showModal())
		return () => {
			dispatch(hideModal())
		}
	})

	const handleClose = () => {
		dispatch(hideModal())
		resetModal()
	}
	const footer = (
		<>
			<Button variant='secondary' onClick={handleClose}>
				Begin Uploading
			</Button>
			<ProgressBar variant='success' />
		</>
	)
	const [uploadedFiles, setUploadedFiles] = useState([])
	return (
		<Modal header='Add Note' footer={footer} reset={resetModal}>
			<>
				<p className='mt-15 font-weight-normal'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae
					scelerisque risus. Praesent molestie nulla eget dictum ornare.
				</p>
				<label className='mb-10'>Upload Files</label>
				<Dropzone
					onDrop={(acceptedFiles) => {
						setUploadedFiles((prevUploadedFiles) => {
							return [...prevUploadedFiles, ...acceptedFiles]
						})
					}}
				>
					{({ getRootProps, getInputProps }) => (
						<section className='section-card'>
							<Card
								id='cardForDropZone'
								className='upload-container d-flex align-items-center justify-content-center position-realtive '
								body
								{...getRootProps()}
							>
								<span>
									Drag Files to Upload or
									<a href='#' className='text-dark'>
										<u> Select Files</u>
									</a>
								</span>
								<input {...getInputProps()} />
							</Card>
						</section>
					)}
				</Dropzone>
				<ListGroup>
					{uploadedFiles.map((file, i) => (
						<ListGroup.Item
							className='d-flex align-items-center bg-light border-0 f-15'
							key={i}
						>
							<div className='file-info'>
								<h4 className='mb-1 f-15 font-weight-semi-bold'>{file.name}</h4>
							</div>
							<div className='d-flex ml-auto align-items-center'>
								<Form.Control
									as='select'
									className='form-control-sm border-0 mr-3 font-weight-normal'
								>
									<option>{file.name}</option>
								</Form.Control>

								<Image src={Icons.deleteIcon} alt='' width='25' />
							</div>
						</ListGroup.Item>
					))}
				</ListGroup>
			</>
		</Modal>
	)
}
export default UploadDocuments
