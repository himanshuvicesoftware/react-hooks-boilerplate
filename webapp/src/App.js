import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// import Routes from './Routes'
// import Loading from './components/Loading'
import NavBar from './components/NavBar'
// import { useAuth0 } from './react-auth0-spa'
import history from './utils/history'
import Home from './features/Home'
const App = () => {
	// const { loading, user, loginWithRedirect } = useAuth0()
	// if (loading) {
	// 	return <Loading />
	// }

	return (
		<div className='App'>
			<Router history={history}>
				<NavBar />
				<Home />
			</Router>
		</div>
	)
}

export default App
