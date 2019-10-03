/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { SEO } from '../components';

export default function PageLayout( props ) {
	const { children } = props;

	return (
		<>
			<SEO { ...props } />
			<StyledPage>{ children }</StyledPage>
		</>
	);
}

const StyledPage = styled.div`
	max-width: 800px;
	margin: auto;
`;
