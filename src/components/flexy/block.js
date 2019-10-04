/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { useClassNames } from '../../utils';

export default function FlexyBlock( props ) {
	const [ classnames ] = useClassNames( props, 'FlexyBlock' );

	return <StyledBlock { ...props } className={ classnames() } />;
}

const StyledBlock = styled.div`
	min-width: 0;
	min-height: 0;
`;
