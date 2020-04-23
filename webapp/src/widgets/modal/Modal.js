import React from 'react'
import { Modal, Image, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { selectShowModal } from './modal.selectors'
import { actions } from './modal.slice'
import './Modal.css'
const closeIcon = require('../../assets/icons/Close.svg')

const { hideModal } = actions

export default function ViceModal({ children, header, footer }) {
	const show = useSelector(selectShowModal)
	const dispatch = useDispatch()
	return (
		<Modal show={show} onHide={() => dispatch(hideModal())}>
			<Modal.Header>
				<Modal.Title className='f-32 font-semi-bold'>{header}</Modal.Title>
				<Button
					type='button'
					className='close p-0 pr-2'
					onClick={() => dispatch(hideModal())}
				>
					<Image src={closeIcon} alt='' width='25' />
				</Button>
			</Modal.Header>
			<Modal.Body>{children}</Modal.Body>
			<Modal.Footer className='justify-content-start border-0'>
				{footer}
			</Modal.Footer>
		</Modal>
	)
}
