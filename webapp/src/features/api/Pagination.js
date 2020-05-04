import React from 'react'
const Pagination = ({ postpage, totalPosts, paginate }) => {
	const pageNo = []
	for (let i = 1; i <= Math.ceil(totalPosts / postpage); i++) {
		pageNo.push(i)
	}
	return (
		<div>
			<ul className='pagination'>
				{pageNo.map((number) => (
					<li className='page-item' key={number}>
						<a onClick={() => paginate(number)} className='page-link' href='#'>
							{number}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}
export default Pagination
