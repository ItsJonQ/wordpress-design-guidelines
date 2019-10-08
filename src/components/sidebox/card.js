/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { Card as BaseCard } from '../index';
import { useClassNames } from '../../utils';

export default function Card( props ) {
	const [ classnames ] = useClassNames( 'SideboxCard', props );

	return <CardUI { ...props } className={ classnames() } />;
}

const CardUI = styled( BaseCard )`
	box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.15),
		0 10px 30px 0 rgba(0, 0, 0, 0.1);
	max-height: 480px;
	overflow-y: auto;
	width: 280px;
`;
