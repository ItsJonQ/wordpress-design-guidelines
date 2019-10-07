/**
 * External dependencies
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { get } from 'lodash';

function getPageTitle( title ) {
	let nextTitle = 'WordPress Design Guidelines';
	if ( title ) {
		nextTitle = `${ title } | WordPress Design Guidelines`;
	}

	return nextTitle;
}

function getTitleFromProps( props ) {
	const { title } = props;
	return title || get( props, 'pageContext.frontmatter.title' );
}

function getDescriptionFromProps( props ) {
	const { description } = props;
	return description || get( props, 'pageContext.frontmatter.description' );
}

export default function SEO( props ) {
	const title = getTitleFromProps( props );
	const pageTitle = getPageTitle( title );
	const description = getDescriptionFromProps( props );

	return (
		<Helmet>
			<html lang="en" />
			<title>{ pageTitle }</title>
			<meta name="description" content={ description } />
			{ pageTitle && <meta property="og:title" content={ pageTitle } /> }
		</Helmet>
	);
}