/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { Link } from './index';
import { useClassNames } from '../utils';

export default function NavLink( props ) {
	const { partiallyActive, ...restProps } = props;
	const [ classnames ] = useClassNames( props, 'CalloutCard' );

	return (
		<LinkUI
			{ ...restProps }
			className={ classnames() }
			activeClassName="is-active"
			partiallyActive={ partiallyActive }
		/>
	);
}

NavLink.defaultProps = {
	partiallyActive: false,
};

const LinkUI = styled( Link )`
	&.is-active {
		font-weight: bold;
	}
`;
