import React, { useEffect, useRef } from 'react'
import WebViewer from '@pdftron/webviewer'
import './about.styles.css'

const Test = () => {
	const viewer = useRef(null)

	useEffect(() => {
		WebViewer(
			{
				path: 'webViewer',
				initialDoc: 'sampleFile.pdf',
				disabledElements: [
					'stickyToolButton',
					'miscToolGroupButton',
					'menuButton',
					'searchButton',
					'panToolButton',
					'viewControlsButton',
					'viewControlsOverlay',
					'selectToolButton',
					'signatureToolButton',
					'shapeToolGroupButton',
					// 'textToolGroupButton',
					'leftPanelButton',
				],
			},
			viewer.current
		).then((instance) => {
			const {
				docViewer,
				Annotations,
				FitMode,
				setFitMode,
				LayoutMode,
				setLayoutMode,
				Feature,
				disableFeatures,
			} = instance

			instance.setHeaderItems((header) => {
				header.push(
					{
						type: 'actionButton',
						img:
							'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>',
						onClick: () => {
							docViewer.setCurrentPage(docViewer.getCurrentPage() + 1)
						},
					},
					{
						type: 'actionButton',
						img:
							'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>',
						onClick: () => {
							docViewer.setCurrentPage(docViewer.getCurrentPage() - 1)
						},
					}
				)
			})

			setLayoutMode(LayoutMode.Single)
			setFitMode(FitMode.Zoom)
			disableFeatures([Feature.PageNavigation])

			const annotManager = docViewer.getAnnotationManager()

			docViewer.on('documentLoaded', () => {
				const rectangleAnnot = new Annotations.RectangleAnnotation()
				rectangleAnnot.PageNumber = 1
				// values are in page coordinates with (0, 0) in the top left
				rectangleAnnot.X = 100
				rectangleAnnot.Y = 150
				rectangleAnnot.Width = 200
				rectangleAnnot.Height = 50
				rectangleAnnot.Author = annotManager.getCurrentUser()
				annotManager.addAnnotation(rectangleAnnot)
				// need to draw the annotation otherwise it won't show up until the page is refreshed
				annotManager.redrawAnnotation(rectangleAnnot)
			})
		})
	}, [])

	return (
		<div className='MyComponent'>
			<div className='header'>React sample</div>
			<div className='webviewer' ref={viewer}></div>
		</div>
	)
}

export default Test
