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
	max-height: 480px;
	width: 280px;
`;
