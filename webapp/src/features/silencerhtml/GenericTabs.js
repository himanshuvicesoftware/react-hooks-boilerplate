import React from 'react'
import { Container, Tabs, Tab } from 'react-bootstrap'

const GenericTabs = (props) => {
	console.log(props)
	return (
		<Container>
			<h1>Generic Tabs</h1>
			<Tabs id='controlled-tab-example'>
				{props.props.map((each) => (
					<Tab eventKey={each} title={each}>
						{props.tabData(each)}
					</Tab>
				))}
			</Tabs>
		</Container>
	)
}

export default GenericTabs
