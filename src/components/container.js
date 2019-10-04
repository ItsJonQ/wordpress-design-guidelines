/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { useClassNames } from '../utils';

export default function Container( props ) {
	const [ classnames ] = useClassNames( props, 'Container' );
	return <ContainerUI { ...props } className={ classnames() } />;
}

const ContainerUI = styled.div`
	margin: auto;
	max-width: 1080px;
	width: 100%;
`;
