import React, { useState } from 'react'
import {
	Modal,
	Button,
	Card,
	ProgressBar,
	Container,
	Row,
	Col,
} from 'react-bootstrap'
import Dropzone from 'react-dropzone'
import axios from 'axios'
// import { fakedata } from './try.js'

export function ModalForDocument() {
	const [open, setOpen] = useState(false)
	const [progressVal, setProgress] = useState(0)
	const [uploadedFiles, setUploadedFiles] = useState([])
	const [uploadButton, changeUploadButton] = useState('Begin Uploading')
	const [ifNothingToUpload, showErrorIfNothingToUpload] = useState(false)
	// var fakedata = {
	// 	name: 'morpheus',
	// 	job: 'leader',
	// 	dat2: 'aasdasd',
	// 	dasd: 'asdasdas',
	// 	asdasd: 'asdjgashdahg',
	// 	hasgdajhsgd: 'asjgdkajshd',
	// 	ajshfkashfkj: 'asfhkasfhkfahb',
	// }

	const deleteImage = (index) => {
		var x = [...uploadedFiles]
		x.splice(index, 1)
		setUploadedFiles(x)
	}

	const config = {
		onUploadProgress: (progressEvent) => {
			const percentCompleted = Math.round(
				(progressEvent.loaded * 100) / progressEvent.total
			)
			setProgress(percentCompleted)
		},
	}

	const submitButtonHandler = () => {
		if (uploadedFiles.length !== 0) {
			changeUploadButton('Uploading')
			axios
				.post('https://reqres.in/api/user', uploadedFiles, config)
				.then((response) => {
					console.log(response, 'axios post response')
				})
		} else {
			showErrorIfNothingToUpload(true)
		}
	}

	return (
		<>
			<Button
				variant='primary'
				onClick={() => {
					setProgress(0)
					setOpen(true)
					setUploadedFiles([])
					changeUploadButton('Begin Uploading')
				}}
			>
				Create document
			</Button>

			<Modal
				show={open}
				onHide={() => setOpen(false)}
				centered
				size='lg'
				animation='true'
			>
				<Modal.Header closeButton>
					<Modal.Title>Upload Files</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Dropzone
						onDrop={(acceptedFiles) => {
							setUploadedFiles((prevUploadedFiles) => {
								return [...prevUploadedFiles, ...acceptedFiles]
							})
						}}
					>
						{({ getRootProps, getInputProps }) => (
							<section>
								<Card body {...getRootProps()}>
									Drag files to upload or Select files.
									<input {...getInputProps()} />
								</Card>
							</section>
						)}
					</Dropzone>

					{uploadedFiles.map((file, i) => (
						<>
							<br />
							<Card key={i}>
								<Card.Body>
									<Container fluid>
										<Row>
											<Col>
												<p>{file.name}</p>
											</Col>
											<Button onClick={() => deleteImage(i)} variant='danger'>
												Delete
											</Button>{' '}
										</Row>
									</Container>
								</Card.Body>
							</Card>
						</>
					))}
				</Modal.Body>

				<Modal.Footer>
					{uploadButton === 'Begin Uploading' &&
					uploadedFiles.length === 0 &&
					ifNothingToUpload === true ? (
						<Card.Text>
							<h3>Nothing to upload!!</h3>
						</Card.Text>
					) : null}

					<Button variant='primary' onClick={submitButtonHandler}>
						{uploadButton}
					</Button>
				</Modal.Footer>
				<ProgressBar animated now={progressVal} variant='success' />
			</Modal>
		</>
	)
}
