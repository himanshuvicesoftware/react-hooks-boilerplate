import React from 'react'
import { Image, Dropdown } from 'react-bootstrap'
import Icons from '../../assets/icons'

const DocumentEdit = () => (
	<div className='border-bottom d-flex bdr-1 bdr-secondary align-items-center bg-white'>
		<div className='zoom-control controls px-25 py-10'>
			<Image src={Icons.zoomInIcon} alt='zoom in' className='mr-4' />
			<Image src={Icons.zoomOutIcon} alt='zoom out' className='disabled' />
		</div>
		<div className='instruction-tool flex-fill px-25 py-10 bdr-1 bdr-secondary border-left border-right'>
			<Dropdown>
				<Dropdown.Toggle
					variant='light'
					size='block'
					className='font-weight-normal f-16 instruction-btn select-arrow'
					id='dropdownMenuButton'
					data-toggle='dropdown'
					aria-haspopup='true'
					aria-expanded='false'
				>
					<div className='d-flex justify-content-start align-items-center'>
						<Image
							src={Icons.clickIcon}
							alt='click-icon'
							className='mr-4'
							width='20'
						/>
						<span>Click to Add Text</span>
					</div>
				</Dropdown.Toggle>

				<Dropdown.Menu
					className='bg-light w-100 p-0 rounded border-0'
					aria-labelledby='dropdownMenuButton'
				>
					<Dropdown.Item className='dropdown-item d-flex justify-content-start align-items-center'>
						<Image
							src={Icons.clickIcon}
							alt='click-icon'
							className='mr-4'
							width='20'
						/>
						<span>Click to Add Text</span>
					</Dropdown.Item>
					<Dropdown.Item className='dropdown-item d-flex justify-content-start align-items-center'>
						<Image
							src={Icons.strikethroughIcon}
							alt='strikethrough-icon'
							className='mr-4'
							width='20'
						/>
						<span>Draw to Strikethrough</span>
					</Dropdown.Item>
					<Dropdown.Item className='dropdown-item d-flex justify-content-start align-items-center'>
						<Image
							src={Icons.checkIcon}
							alt='check-icon'
							className='mr-4'
							width='20'
						/>
						<span>Click to Add a Checkmark</span>
					</Dropdown.Item>
					<Dropdown.Item className='dropdown-item d-flex justify-content-start align-items-center'>
						<Image
							src={Icons.drawIcon}
							alt='draw-icon'
							className='mr-4'
							width='20'
						/>
						<span>Free Draw</span>
					</Dropdown.Item>
					<Dropdown.Item className='dropdown-item d-flex justify-content-start align-items-center'>
						<Image
							src={Icons.calendarIcon}
							alt='calender-icon'
							className='mr-4'
							width='20'
						/>
						<span>Click to Add Initials & Date Stamp</span>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>

		<div className='page-control controls ml-auto d-flex align-items-center px-25 py-10'>
			<span className='mr-4 d-inline-flex align-items-center'>
				<Image src={Icons.arrowLeftDarkIcon} alt='arrow-left' width='25' />
				<span className='font-weight-normal text-secondary ml-2 d-xl-block d-none'>
					Previous Page
				</span>
			</span>
			<span className='d-inline-flex align-items-center'>
				<span className='font-weight-normal text-secondary mr-2 d-xl-block d-none'>
					Next Page
				</span>
				<Image src={Icons.arrowRightDarkIcon} alt='arrow-right' width='25' />
			</span>
		</div>
	</div>
)

export default DocumentEdit
