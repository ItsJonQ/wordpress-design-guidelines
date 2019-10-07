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

	return <BlockUI { ...props } className={ classnames() } />;
}

const BlockUI = styled.div`
	flex: 1;
	min-width: 0;
	min-height: 0;
`;
