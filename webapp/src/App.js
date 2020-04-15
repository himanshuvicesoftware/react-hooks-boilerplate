import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import Loading from './components/Loading'
import NavBar from './components/NavBar'
import { useAuth0 } from './react-auth0-spa'
import history from './utils/history'

const App = () => {
	const { loading } = useAuth0()

	if (loading) {
		return <Loading />
	}

	return (
		<Router history={history}>
			<NavBar />
			<Routes />
		</Router>
	)
}

export default App
