import React from 'react'
import Card from 'react-bootstrap/Card'
import './ReportCard.styles.css'
const ReportCard = (props) => {
	return (
		<div className='div'>
			<Card>
				<Card.Body>
					<h4>Document</h4>
					<h3>{props.totalDocuments}</h3>
					<span>{props.documentType}</span>
				</Card.Body>
			</Card>
		</div>
	)
}
export default ReportCard
