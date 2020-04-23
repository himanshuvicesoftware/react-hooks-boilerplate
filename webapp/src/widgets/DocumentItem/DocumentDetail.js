import React, { Fragment } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function DocumentDetail() {
	return (
		<Fragment>
			<Col md={4} lg={3}>
				<Card className='shadow-sm border-0 mb-25'>
					<Card.Body className='p-25'>
						<Card.Title className='font-semi-bold mb-25'>
							Document Details
						</Card.Title>

						<dl className='discription-list  mb-0 no-gutters'>
							<DocumentDetailProp property='Creation Date' value='11/01/20' />
							<DocumentDetailProp
								property='Expiration Date:'
								value='555-555-555555'
							/>
							<DocumentDetailProp
								property='Serial Number:'
								value='666-666-666666'
							/>
							<DocumentDetailProp
								property='Document Status:'
								value='Transferred'
							/>
							<DocumentDetailProp property='Version Number' value='2' />
						</dl>

						<div className='bg-secondary opacity-75 separator mt-35 mb-35'></div>

						<div className='mb-15'>
							<h6 className='text-light font-semi-bold mb-1'>
								Document Assigned To:
							</h6>
							<div className='d-flex'>
								<div className='d-flex align-items-center '>
									<div className='user-circle d-inline-block position-relative rounded-circle'>
										{/* <img width="25" src="./images/icons/circle.svg" alt=""> */}
										<div
											className='position-absolute user-name font-weight-normal'
											// style='font-size:9px'
										>
											CM
										</div>
									</div>
									<span className='f-15 ml-2 '>Cody Miles</span>
								</div>

								<a className='d-block ml-auto' href='#'>
									{/* <img src="./images/icons/Edit.svg" alt=""> */}
								</a>
							</div>
						</div>

						<div className='pt-1'>
							<h6 className='text-light font-semi-bold mb-1'>
								Document Created By:
							</h6>
							<div className='d-flex'>
								<div className='d-flex align-items-center '>
									<div className='user-circle d-inline-block position-relative rounded-circle'>
										{/* <img width="25" src="./images/icons/circle.svg" alt=""> */}
										<div
											className='position-absolute user-name font-weight-normal'
											// style='font-size:9px'
										>
											CM
										</div>
									</div>
									<span className='f-15 ml-2 '>Cody Miles</span>
								</div>
							</div>
						</div>

						<div className='bg-secondary opacity-75 separator mt-35 mb-35'></div>

						<Button className='btn btn-block btn-secondary'>
							Create New Version
						</Button>
						<Button className='btn btn-block btn-secondary'>
							Upload Files
						</Button>
						<Button className='btn btn-block btn-secondary'>Add Note</Button>
						<button className='btn btn-outline btn-block d-flex align-items-center'>
							View Correction Log
							{/* <img className="ml-auto" src="./images/icons/Log.svg" alt=""> */}
						</button>
						<button className='btn btn-outline btn-block d-flex align-items-center'>
							Flag Document
							{/* <img className="ml-auto" src="./images/icons/Flag.svg" alt=""> */}
						</button>
						<button className='btn btn-outline btn-block d-flex align-items-center'>
							Export Document
							{/* <img className="ml-auto" src="./images/icons/Download.svg" alt=""> */}
						</button>
						<button className='btn btn-outline btn-block d-flex align-items-center'>
							Export History
							{/* <img className="ml-auto" src="./images/icons/Download.svg" alt=""> */}
						</button>
					</Card.Body>
				</Card>
			</Col>
		</Fragment>
	)
}

export function DocumentDetailProp({ property, value }) {
	return (
		<Fragment>
			<Row className='no-gutters mb-2 align-items-baseline'>
				<Col md={7} className='text-light'>
					{property}
				</Col>
				<Col md={5} className='font-weight-normal f-15 mb-0'>
					{value}
				</Col>
			</Row>
		</Fragment>
	)
}
