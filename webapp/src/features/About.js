import React, { Component } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import samplePDF from './pdfForm.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export default class Test extends Component {
	state = {
		numPages: null,
		pageNumber: 1,
		scale: 1,
	}

	onDocumentLoadSuccess = (document) => {
		const { numPages } = document
		this.setState({
			numPages,
			pageNumber: 1,
		})
	}

	zoomIn = () => {
		this.setState({ scale: this.state.scale + 0.5 })
	}

	zoomOut = () => {
		this.setState({ scale: this.state.scale - 0.5 })
	}

	changePage = (offset) =>
		this.setState((prevState) => ({
			pageNumber: prevState.pageNumber + offset,
		}))

	previousPage = () => this.changePage(-1)

	nextPage = () => this.changePage(1)

	render() {
		const { numPages, pageNumber } = this.state

		return (
			<React.Fragment>
				<div>
					{/* <p>
						Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
					</p> */}
					<button
						type='button'
						disabled={this.state.scale === 2}
						onClick={this.zoomIn}
					>
						ZoomIn
					</button>
					<button
						type='button'
						disabled={this.state.scale === 1}
						onClick={this.zoomOut}
					>
						ZoomOut
					</button>

					<button
						type='button'
						disabled={pageNumber <= 1}
						onClick={this.previousPage}
					>
						Previous
					</button>
					<button
						type='button'
						disabled={pageNumber >= numPages}
						onClick={this.nextPage}
					>
						Next
					</button>
				</div>
				<Document
					file={samplePDF}
					externalLinkTarget='_blank'
					onLoadSuccess={this.onDocumentLoadSuccess}
				>
					<Page
						renderAnnotationLayer={true}
						renderInteractiveForms={true}
						scale={this.state.scale}
						pageNumber={pageNumber}
						renderTextLayer={false}
					/>
				</Document>
			</React.Fragment>
		)
	}
}
