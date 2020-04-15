import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import users from './features/users'
import Page from './widgets/Page/Page'
import Test from './features/About'
import screenTimeReports from './features/screenTimeReports'
import ApiTest from './features/apiTest/components/ApiTest'

const {
	components: { UsersPage, UserDetailsPage },
} = users

const {
	components: { ScreenTimeReports },
} = screenTimeReports

export default function Routes() {
	return (
		<Container>
			<Switch>
				<PageRoute path='/api'>
					<ApiTest />
				</PageRoute>
				<PageRoute path='/about'>
					<Test />
				</PageRoute>
				<PageRoute path='/users/:id'>
					<UserDetailsPage />
				</PageRoute>
				<PageRoute path='/users'>
					<UsersPage />
				</PageRoute>
				<PageRoute path='/reports/:userid'>
					<ScreenTimeReports />
				</PageRoute>
				<PageRoute path='/'>
					<UsersPage />
				</PageRoute>
			</Switch>
		</Container>
	)
}

function PageRoute({ children, ...rest }) {
	return (
		<Route {...rest}>
			<Page>{children}</Page>
		</Route>
	)
}
