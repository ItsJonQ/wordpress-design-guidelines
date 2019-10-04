/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { useClassNames } from '../../utils';

export default function FlexyItem( props ) {
	const [ classnames ] = useClassNames( props, 'FlexyItem' );

	return <StyledItem { ...props } className={ classnames() } />;
}

const StyledItem = styled.div`
	min-width: 0;
	min-height: 0;
`;
