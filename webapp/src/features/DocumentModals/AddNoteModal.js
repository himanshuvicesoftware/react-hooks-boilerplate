import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Modal, { hideModal, showModal } from '../../widgets/modal'

const AddNote = ({ resetModal }) => {
	const dispatch = useDispatch()
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
			<Button className=' btn-big' data-dismiss='modal' onClick={handleClose}>
				Save
			</Button>
			<Button className='btn-big' variant='outline' onClick={handleClose}>
				Cancel
			</Button>
		</>
	)
	return (
		<Modal header='Add Note' footer={footer} reset={resetModal}>
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
