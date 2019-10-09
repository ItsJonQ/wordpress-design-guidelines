/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';
import { color, typography, space } from 'styled-system';

/**
 * Internal dependencies
 */
import { useClassNames } from '../utils';

export default function Box( props ) {
	const [ classnames ] = useClassNames( props, 'Box' );

	return <BoxUI { ...props } className={ classnames() } />;
}

const BoxUI = styled( 'div' )( color, typography, space );
