// import React, { useEffect, useState } from 'react'
// import * as ReactBootStrap from 'react-bootstrap'
// import { Modal, Button } from 'react-bootstrap'
// import NotificationsIcon from '@material-ui/icons/Notifications'
// export function About() {
// 	const [items, setItem] = useState([])
// 	const [show, setShow] = useState(false)
// 	//const [count, setCount] = useState(0)

// 	const handleClose = () => setShow(false)
// 	const handleShow = () => setShow(true)
// 	//	const [firstName, setFirstName] = useState('')
// 	//	const [lastName, setLastName] = useState('')
// 	//	const [email, setEmail] = useState('')

// 	useEffect(() => {
// 		fetch('https://reqres.in/api/users')
// 			.then((response) => response.json())
// 			.then((res) => setItem(res.data))
// 			.catch(function (error) {
// 				console.log(error)
// 			})
// 	}, [])

// 	// const saveChanges = () => {
// 	// 	const user = {
// 	// 		first_name: firstName,
// 	// 		last_name: lastName,
// 	// 		email: email,
// 	// 	}
// 	// 	items.push(user)
// 	// 	console.log(user, 'user')
// 	// }
// 	// useEffect((initialItem) => {
// 	// 	if (initialItem === items) {
// 	// 		console.log('no change')
// 	// 	} else {
// 	// 		count = count + 1
// 	// 	}
// 	// })

// 	const onChange = (e) => {
// 		//
// 		e.preventDefault()
// 		console.log(e)
// 		// setItem({ items: [...items, newData] })
// 		console.log(e.target.name)
// 		console.log(e.target.value)
// 		setItem({
// 			[e.target.value]: e.target.value,
// 		})
// 	}

// 	return (
// 		<div>
// 			<ReactBootStrap.Table data={items}>
// 				<thead>
// 					<tr>
// 						<th>Id</th>
// 						<th>Email</th>
// 						<th>First_Name</th>
// 						<th>Last_Name</th>
// 						<th>Avatar</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{items.map((item, index) => (
// 						<tr key={index}>
// 							<td>{item.id}</td>
// 							<td>{item.email}</td>
// 							<td>{item.first_name}</td>
// 							<td>{item.last_name}</td>
// 							<td>{item.avatar}</td>
// 						</tr>
// 					))}
// 				</tbody>
// 			</ReactBootStrap.Table>

// 			<div>
// 				<Button variant='primary' onClick={handleShow}>
// 					Add
// 				</Button>
// 				<Modal show={show} onHide={handleClose}>
// 					<Modal.Header closeButton>
// 						<Modal.Title>Enter Details: </Modal.Title>
// 					</Modal.Header>
// 					<Modal.Body>
// 						<form>
// 							<label>Email: </label>
// 							<input
// 								type='email'
// 								id='email'
// 								name='email'
// 								onChange={(e) => setEmail(e.target.value)}
// 							/>
// 							<label> First Name: </label>
// 							<input
// 								type='text'
// 								placeholer='first name'
// 								name='fname'
// 								onChange={(e) => setFirstName(e.target.value)}
// 							/>
// 							<label> Last Name: </label>
// 							<input
// 								type='text'
// 								placeholer='last name'
// 								name='lname'
// 								onChange={(e) => setLastName(e.target.value)}
// 							/>
// 						</form>
// 					</Modal.Body>
// 					<Modal.Footer>
// 						<Button variant='secondary' onClick={handleClose}>
// 							Close
// 						</Button>
// 						<Button variant='primary' onClick={saveChanges}>
// 							Save Changes
// 						</Button>
// 					</Modal.Footer>
// 				</Modal>
// 			</div>
// 		</div>
// 	)
// }

// export default About
