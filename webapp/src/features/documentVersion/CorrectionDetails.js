import React, { useState } from 'react'
import Icons from '../../assets/icons'
import { Image, ListGroup, Form, Button } from 'react-bootstrap'
import classNames from 'classnames'

const CorrectionDetails = () => {
	const [showLog, setShowLog] = useState(true)
	const logClass = classNames({ ' close-log': !showLog })
	const [showAnnotation, setShowAnnotation] = useState(false)
	const showAnnotationClass = classNames({
		' open-correction': showAnnotation,
	})

	return (
		<aside
			className={`correction-log-container bg-white bdr-1 bdr-secondry border-top py-20 px-15 ${logClass} ${showAnnotationClass}`}
		>
			<div className='correction-log'>
				<div className='d-flex'>
					<h5 className='mb-0 font-semi-bold'>Correction Log</h5>
					<span
						className='side-toggle ml-auto'
						onClick={() => setShowLog((showLog) => !showLog)}
					>
						<Image src={showLog ? Icons.minimizeIcon : Icons.maximizeIcon} />
					</span>
				</div>
				<div className='correction-list'>
					<p className='font-weight-normal mb-15'>
						Start a New Correction Using An Annotation
					</p>
					<ListGroup>
						<ListGroup.Item className='d-flex align-items-center bg-light border-0 f-15 p-15'>
							<div className='file-info'>
								<div className='d-flex align-items-center'>
									<div className='counter rounded-circle bg-primary text-white d-flex align-items-center justify-content-center'>
										<span className='font-weight-normal'>1</span>
									</div>
									<h4 className='mb-0 f-15 font-weight-semi-bold ml-3'>
										Corrected Name of Function
									</h4>
								</div>
							</div>
							<div className='d-flex ml-auto align-items-center'>
								<h4 className='mb-0 f-15 font-weight-semi-bold mr-3'>
									4 Annotations
								</h4>
								<Image
									src={Icons.editIcon}
									onClick={() => setShowAnnotation(true)}
									alt='edit-icon'
									width='20'
									className='mr-2 correction-link'
								/>
								<Image
									src={Icons.deleteIcon}
									alt='delete-icon'
									width='20'
									className='mr-2 correction-link'
								/>
							</div>
						</ListGroup.Item>
					</ListGroup>
				</div>
			</div>

			<div className='correction-details'>
				<div className='d-flex align-items-center mb-25'>
					<h4 className='f-24 m-0 font-semi-bold'>Correction Details</h4>

					<div className='d-flex align-items-center ml-auto'>
						<Button variant='primary' size='sm'>
							Save
						</Button>
						<span className='ml-2'>
							<Image src={Icons.deleteIcon} alt='delete-icon' width='20' />
						</span>
						<Image
							src={Icons.closeIcon}
							alt='close-icon'
							width='20'
							className='ml-2 correction-link'
							onClick={() => setShowAnnotation(false)}
						/>
					</div>
				</div>
				<Form.Group className='mb-25'>
					<Form.Label>Correction Description</Form.Label>
					<Form.Control type='text' value='Corrected Name of Function' />
				</Form.Group>

				<CorrectionAnnotations />
			</div>
		</aside>
	)
}

const CorrectionAnnotations = () => {
	const mockAnnotations = [
		{
			id: 1,
			name: 'Strikethrough',
			detail: '',
		},
		{
			id: 2,
			name: 'Text',
			detail: '“World Show”',
		},
		{
			id: 3,
			name: 'Initials & Date Stamp',
			detail: '',
		},
	]
	return (
		<ListGroup>
			{mockAnnotations.map((annotation, index) => (
				<ListGroup.Item
					className=' d-flex align-items-center  border-bottom  p-15'
					key={index}
				>
					<div className='d-flex align-items-center'>
						<div className='counter rounded-circle bg-danger text-white d-flex align-items-center justify-content-center'>
							<span className='font-weight-normal'>{annotation.id}</span>
						</div>
						<h6 className='mb-0 ml-3 font-semi-bold'>{annotation.name}</h6>
					</div>

					<div className='ml-auto'>
						<h6>{annotation.detail}</h6>
					</div>

					<div className='d-flex ml-auto align-items-center'>
						<Image src={Icons.deleteIcon} alt='' width='20' />
					</div>
				</ListGroup.Item>
			))}
		</ListGroup>
	)
}
export default CorrectionDetails
