/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { GlobalStyles, PageLayout, SEO } from '../components';

export default function Layout( props ) {
	const { children } = props;

	return (
		<PageLayout>
			<GlobalStyles />
			<SEO { ...props } />
			<PageUI>{ children }</PageUI>
		</PageLayout>
	);
}

const PageUI = styled.div`
	max-width: 800px;
	margin: auto;
`;
