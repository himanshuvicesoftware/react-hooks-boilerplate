import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { useSelector } from 'react-redux'
import { getShowModal } from '../modal.selectors'
import { useHideModal } from '../modal.actions'

export default function ViceModal({ children }) {
	const show = useSelector(getShowModal)
	const hideModal = useHideModal()

	return (
		<Modal show={show} onHide={hideModal}>
			{children}
		</Modal>
	)
}
