/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { useClassNames } from '../utils';

export default function LogoSVG( props ) {
	const { color, style: styleProp, size, ...restProps } = props;
	const [ classnames ] = useClassNames( props, 'LogoSVG' );

	const style = {
		...styleProp,
		color,
		width: size,
		height: size,
	};

	return <LogoUI { ...restProps } className={ classnames() } style={ style } />;
}

LogoSVG.defaultProps = {
	size: 20,
	style: {},
};

const LogoUI = styled.span`
	display: block;

	svg {
		display: block;
		height: auto;
		pointer-events: none;
		width: 100%;
	}

	path {
		fill: currentColor;
	}
`;
