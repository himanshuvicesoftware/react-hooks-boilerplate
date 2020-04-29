import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Page from './widgets/Page/Page'
import Home from './features/Home'
import Authenticated from './features/Authenticated'
import Authorized from './features/Authorized'
import Users from './features/users'
import Settings from './features/settings'
import SignIn from './features/SignIn'
import Profile from './features/profile'
import DocumentItem from './features/documentItem/DocumentItem'
import DocumentVersion from './features/DocumentVersion'
import DocumentArchive from './features/DocumentArchive'

export default function Routes() {
	return (
		<Switch>
			<PageRoute path='/profile'>
				<Profile />
			</PageRoute>
			<PageRoute path='/users'>
				<Users />
			</PageRoute>
			<PageRoute path='/settings'>
				<Settings />
			</PageRoute>
			<PageRoute path='/authenticated'>
				<Authenticated />
			</PageRoute>
			<PageRoute path='/authorized'>
				<Authorized />
			</PageRoute>
			<PageRoute path='/sign-in'>
				<SignIn />
			</PageRoute>
			<PageRoute path='/document/new-version/:documentId'>
				<DocumentVersion />
			</PageRoute>
			<PageRoute path='/document/:customerId'>
				<DocumentItem />
			</PageRoute>
			<PageRoute path='/documents'>
				<DocumentArchive />
			</PageRoute>
			<PageRoute path='/'>
				<Home />
			</PageRoute>
		</Switch>
	)
}

function PageRoute({ children, ...rest }) {
	return (
		<Route {...rest}>
			<Page>{children}</Page>
		</Route>
	)
}
