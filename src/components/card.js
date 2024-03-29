/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { useClassNames } from '../utils';

export default function Card( props ) {
	const [ classnames ] = useClassNames( props, 'Card' );

	return <CardUI { ...props } className={ classnames() } />;
}

const CardUI = styled.div`
	background: white;
	border-radius: 4px;
	box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.15);
	padding: 20px;
`;
