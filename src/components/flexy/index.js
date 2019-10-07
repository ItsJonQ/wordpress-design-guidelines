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
	const { spacing, ...restProps } = props;
	const [ classnames ] = useClassNames( props, 'Flexy' );

	const className = classnames( spacing && `is-spacing-${ spacing }` );

	return <FlexyUI { ...restProps } className={ className } />;
}

Flexy.defaultProps = {
	spacing: 'md',
};

const alignProps = {
	top: 'flex-start',
	center: 'center',
	middle: 'center',
	bottom: 'flex-end',
};

const FlexyUI = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;

	${ ( { align } ) => `
		align-items: ${ alignProps[ align ] };
	` }

	&.is-spacing-none > * {
		margin-right: 0px;

		&:last-child {
			margin-right: 0;
		}
	}
	&.is-spacing-xs > * {
		margin-right: 2px;

		&:last-child {
			margin-right: 0;
		}
	}
	&.is-spacing-sm > * {
		margin-right: 4px;

		&:last-child {
			margin-right: 0;
		}
	}
	&.is-spacing-md > * {
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
