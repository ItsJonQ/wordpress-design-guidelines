/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { Container, Link } from './index';
import { useClassNames } from '../utils';

export default function SiteHeader( props ) {
	const [ classnames ] = useClassNames( props, 'SiteHeader' );

	return (
		<SiteHeaderUI className={ classnames() }>
			<Container>
				<ContentUI>
					<Link to="/">Design Guidelines</Link>
				</ContentUI>
			</Container>
		</SiteHeaderUI>
	);
}

const SiteHeaderUI = styled.div`
	background: var(--colorDarkGray800);
	box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
	height: 50px;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 100;

	a {
		color: white;
	}
`;

const ContentUI = styled.div`
	align-items: center;
	display: flex;
	min-height: 50px;
`;
