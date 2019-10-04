/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import Block from './block';
import Item from './item';
import { useClassNames } from '../../utils';

export default function Flexy( props ) {
	const [ classnames ] = useClassNames( props, 'Flexy' );

	return <StyledFlexy { ...props } className={ classnames() } />;
}

const alignProps = {
	top: 'flex-start',
	center: 'center',
	middle: 'center',
	bottom: 'flex-end',
};

const StyledFlexy = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;

	${ ( { align } ) => `
		align-items: ${ alignProps[ align ] };
	` }

	& > * {
		margin-right: 8px;

		&:last-child {
			margin-right: 0;
		}
	}
`;

Flexy.defaultProps = {
	align: 'center',
};

Flexy.Item = Item;
Flexy.Block = Block;
