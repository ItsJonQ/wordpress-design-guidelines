/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line react/forbid-elements
export default ( props ) => <SVGUI { ...props }>{ props.children }</SVGUI>;

const SVGUI = styled.svg`
	path {
		fill: currentColor;
	}
`;
