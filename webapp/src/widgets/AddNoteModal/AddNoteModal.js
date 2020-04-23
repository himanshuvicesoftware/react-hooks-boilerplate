import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Modal, { showModal, hideModal } from '../modal'

const AddNote = () => {
	const dispatch = useDispatch()
	const footer = (
		<>
			<Button
				className='btn btn-primary btn-big'
				data-dismiss='modal'
				variant='light'
				onClick={() => dispatch(hideModal())}
			>
				Save
			</Button>
			<Button
				className='btn btn-outline btn-big'
				variant='light'
				onClick={() => dispatch(hideModal())}
			>
				Cancel
			</Button>
		</>
	)
	return (
		<>
			<Button
				onClick={() => {
					dispatch(showModal())
				}}
			>
				AddNote
			</Button>
			<Modal header='Add Notes' footer={footer}>
				<Form.Group controlId='controlTextarea'>
					<Form.Control
						as='textarea'
						rows='10'
						cols='80'
						placeholder='Your Note Here...'
					/>
				</Form.Group>
			</Modal>
		</>
	)
}
export default AddNote
