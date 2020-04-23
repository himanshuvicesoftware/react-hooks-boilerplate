import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import NavBar from './widgets/NavBar'
import Routes from './Routes'
import './app.css'
import NotificationPopup from './infrastructure/notificationPopup'
import FooterBar from './widgets/FooterBar'

function App() {
	return (
		<Router>
			<NavBar />
			<Container className='page'>
				<NotificationPopup />
				<Routes />
			</Container>
			<FooterBar />
		</Router>
	)
}

export default App
