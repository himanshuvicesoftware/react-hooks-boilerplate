import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Modal, { hideModal, showModal } from '../../widgets/modal'
import { actions } from '../documentItem/documentItem.slice'
const { setSelectedDocumentModal } = actions

const AddNote = () => {
	const dispatch = useDispatch()
	const resetModal = () => dispatch(setSelectedDocumentModal(null))
	useEffect(() => {
		dispatch(showModal())
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
		<Modal title='Add Note' footer={footer} reset={resetModal}>
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
