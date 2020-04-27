import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Modal, { hideModal } from '../../widgets/modal'

const AddNote = () => {
	const dispatch = useDispatch()
	const footer = (
		<>
			<Button
				className=' btn-big'
				data-dismiss='modal'
				onClick={() => dispatch(hideModal())}
			>
				Save
			</Button>
			<Button
				className='btn-big'
				variant='outline'
				onClick={() => dispatch(hideModal())}
			>
				Cancel
			</Button>
		</>
	)
	return (
		<Modal header='Add Note' footer={footer}>
			<Form.Group controlId='controlTextarea'>
				<Form.Control
					as='textarea'
					rows='10'
					cols='80'
					placeholder='Your Note Here...'
				/>
			</Form.Group>
		</Modal>
	)
}
export default AddNote
