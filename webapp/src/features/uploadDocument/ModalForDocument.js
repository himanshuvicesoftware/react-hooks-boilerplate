import React, { useState } from 'react'
import { Modal, Button, Card } from 'react-bootstrap'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import { fakedata } from './try.js'

export function ModalForDocument() {
	const [open, setOpen] = useState(false)
	// var fakedata = {
	// 	name: 'morpheus',
	// 	job: 'leader',
	// 	dat2: 'aasdasd',
	// 	dasd: 'asdasdas',
	// 	asdasd: 'asdjgashdahg',
	// 	hasgdajhsgd: 'asjgdkajshd',
	// 	ajshfkashfkj: 'asfhkasfhkfahb',
	// }

	const config = {
		onUploadProgress: (progressEvent) =>
			console.log('>>>', progressEvent.loaded),
	}
	// const config = {
	// 	onUploadProgress: (progressEvent) => {
	// 		const percentCompleted = Math.round(
	// 			(progressEvent.loaded * 100) / progressEvent.total
	// 		)
	// 		console.log('>>>', percentCompleted, '%')
	// 	},
	// }

	const submitButtonHandler = () => {
		axios
			.post('https://reqres.in/api/user', fakedata, config)
			.then((response) => {
				console.log(response, 'axios post response')
			})
	}

	return (
		<>
			<Button variant='primary' onClick={() => setOpen(true)}>
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
					<Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
						{({ getRootProps, getInputProps }) => (
							<section>
								<Card body {...getRootProps()}>
									Drag files to upload or Select files.
									<input {...getInputProps()} />
								</Card>
							</section>
						)}
					</Dropzone>
				</Modal.Body>

				<Modal.Footer>
					<Button variant='primary' onClick={submitButtonHandler}>
						Begin Uploading
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}
