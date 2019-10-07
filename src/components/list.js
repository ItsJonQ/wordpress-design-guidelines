/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { useClassNames } from '../utils';

export default function List( props ) {
	const [ classnames ] = useClassNames( props, 'List' );
	const { isUnstyled, ...restProps } = props;

	const className = classnames( isUnstyled && 'is-unstyled' );

	return <ListUI { ...restProps } className={ className } />;
}

List.defaultProps = {
	isUnstyled: false,
};

const Item = ( props ) => {
	const [ classnames ] = useClassNames( props, 'ListItem' );
	return <ItemUI { ...props } className={ classnames() } />;
};

List.Item = Item;

const ListUI = styled.ul`
	padding-left: 20px;
	margin-top: 0;
	margin-bottom: 0;
	list-style: disc outside none;

	&.is-unstyled {
		list-style: none;
		padding-left: 0;
	}
`;

const ItemUI = styled.li`
	margin-bottom: 8px;

	&:last-child {
		margin-bottom: 0;
	}
`;
