import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import DocumentVersionHeader from './DocumentVersionHeader'
import DocumentVersionSidebar from './DocumentVersionSidebar'
import CorrectionDetails from './CorrectionDetails'
import DocumentEdit from './DocumentEdit'
import classNames from 'classnames'
import './DocumentVersion.css'
import Images from '../../assets/images'

const DocumentVersion = () => {
	const [showSidebar, setShowSidebar] = useState(true)
	const sidebarClass = classNames('document-wrapper d-flex position-relative', {
		'close-aside': !showSidebar,
	})

	return (
		<>
			<DocumentVersionHeader />
			<div className={sidebarClass}>
				<DocumentVersionSidebar
					showSidebar={showSidebar}
					setShowSidebar={setShowSidebar}
				/>
				<div className='flex-fill pl-5 pl-lg-0'>
					<DocumentEdit />
					<div className='document-wrapper mb-50'>
						<div className='p-25'>
							<Image
								src={Images.formImage}
								alt='form-image'
								className='img-fluid bdr-1 bdr-secondry border rounded'
							/>
						</div>
						<CorrectionDetails />
					</div>
				</div>
			</div>
		</>
	)
}
export default DocumentVersion
