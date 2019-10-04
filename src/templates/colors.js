/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { GlobalStyles, SiteLayout, SEO } from '../components';

export default function Template( props ) {
	const { children } = props;

	return (
		<SiteLayout>
			<GlobalStyles />
			<SEO { ...props } />
			<PageUI>{ children }</PageUI>
		</SiteLayout>
	);
}

const PageUI = styled.div`
	max-width: 800px;
	margin: auto;
`;
