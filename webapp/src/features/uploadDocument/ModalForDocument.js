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
	var fakedata = {
		name: 'morpheus',
		job: 'leader',
		dat2: 'aasdasd',
		dasd: 'asdasdas',
		asdasd: 'asdjgashdahg',
		hasgdajhsgd: 'asjgdkajshd',
		ajshfkashfkj: 'asfhkasfhkfahb',
	}

	const deleteImage = (index) => {
		// setUploadedFiles((prevUploadedFiles) => {
		// 	prevUploadedFiles.splice(index, 1)
		// 	return prevUploadedFiles
		// })
		// var index = uploadedFiles.indexOf(filename)
		const x = uploadedFiles
		x.splice(index, 1)
		// console.log(x, 'x')
		setUploadedFiles(x)
		console.log(uploadedFiles, 'uplo')
	}

	// const config = {
	// 	onUploadProgress: (progressEvent) =>
	// 		console.log('>>>', progressEvent.loaded),
	// }
	const config = {
		onUploadProgress: (progressEvent) => {
			const percentCompleted = Math.round(
				(progressEvent.loaded * 100) / progressEvent.total
			)
			setProgress(percentCompleted)
			console.log('>>>', percentCompleted, '%')
		},
	}

	const submitButtonHandler = () => {
		axios
			.post('https://reqres.in/api/user', fakedata, config)
			.then((response) => {
				console.log(response, 'axios post response')
			})
	}

	return (
		<>
			<Button
				variant='primary'
				onClick={() => {
					setProgress(0)
					setOpen(true)
					setUploadedFiles([])
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
							console.log(acceptedFiles)
							setUploadedFiles(acceptedFiles)
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
					<Button variant='primary' onClick={submitButtonHandler}>
						Begin Uploading
					</Button>
				</Modal.Footer>
				<ProgressBar animated now={progressVal} variant='success' />
			</Modal>
		</>
	)
}
