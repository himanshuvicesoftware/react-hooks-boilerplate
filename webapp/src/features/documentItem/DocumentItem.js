import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DocumentDetailsSidebar from './DocumentDetailsSidebar'
import DocumentHistory from './DocumentHistory'
import FileList from './FileList'
import { Row, Col, Container } from 'react-bootstrap'
import { fetchAttachmentListByDocumentId } from './documentItem.asyncActions'
import { selectAttachmentList } from './documentItem.selectors'
import './DocumentItem.css'

const DocumentItem = () => {
	const attachmentListData = useSelector(selectAttachmentList)
	const documentHistoryData = useSelector(selectDocumentHistory)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchAttachmentListByDocumentId(123))
		dispatch(fetchDocumentHistoryByDocumentId(2))
	}, [dispatch])

	return (
		<>
			<Container fluid>
				<Row className='mb-50 pt-50'>
					<Col md={5} lg={7}>
						<h2 className='page-title  m-0 font-semi-bold'>[CustomerName]</h2>
					</Col>
				</Row>
				<Row>
					<DocumentDetailsSidebar />
					<Col md={8} lg={9}>
						<FileList attachmentListData={attachmentListData} />
						<DocumentHistory documentHistoryData={documentHistoryData} />
					</Col>
				</Row>
			</Container>

			<div className='spacer'></div>
		</>
	)
}

export default DocumentItem
