/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { useClassNames } from '../utils';

export default function Break( props ) {
	const [ classnames ] = useClassNames( props, 'Break' );
	return <BreakUI { ...props } className={ classnames() } />;
}

const BreakUI = styled.div`
	height: 0;
	margin: 20px 0;
	overflow: hidden;
`;
