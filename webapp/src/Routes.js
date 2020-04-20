import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import users from './features/users'
import Page from './widgets/Page/Page'
import { About } from './features/About'
import { TableForApi } from './features/implementApi/TableForApi'
import { ModalForDocument } from './features/uploadDocument/ModalForDocument'
import screenTimeReports from './features/screenTimeReports'
import DatePickerComponent from './features/uploadDocument/DatePickerComponent'

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
				<PageRoute path='/document'>
					<ModalForDocument />
				</PageRoute>
				<PageRoute path='/date'>
					<DatePickerComponent />
				</PageRoute>
				<PageRoute path='/table'>
					<TableForApi />
				</PageRoute>
				<PageRoute path='/about'>
					<About />
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
