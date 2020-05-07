import React from 'react'

import {
	Page,
	Text,
	View,
	Document,
	StyleSheet,
	PDFDownloadLink,
} from '@react-pdf/renderer'

import DemoCanvasDraw from './DemoCanvasDraw'

const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		backgroundColor: '#E4E4E4',
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},
})

const Download = () => (
	<PDFDownloadLink document={<Doc />} fileName='somename.pdf'>
		{({ blob, url, loading, error }) =>
			loading ? 'Loading document...' : 'Download now!'
		}
	</PDFDownloadLink>
)

const Doc = () => (
	<Document>
		<Page size='A4' style={styles.page}>
			<View style={styles.section}>
				<Text>Section #1</Text>
			</View>
			<View style={styles.section}>
				<Text>Section #2</Text>
			</View>
		</Page>
	</Document>
)

const PdfFiller = () => {
	return (
		<div>
			<Download />
			<DemoCanvasDraw />
		</div>
	)
}

export default PdfFiller
