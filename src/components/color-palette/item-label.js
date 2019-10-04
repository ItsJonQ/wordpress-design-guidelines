/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { useClassNames } from '../../utils';

export default function ColorPaletteItemLabel( props ) {
	const [ classnames ] = useClassNames( props, 'ColorPaletteItemLabel' );
	const { children, isMainAccent, isShadeTint } = props;

	const className = classnames(
		isMainAccent && 'is-mainAccent',
		isShadeTint && 'is-shadeTint',
	);

	return <LabelUI className={ className }>{ children }</LabelUI>;
}

const LabelUI = styled.div`
	font-size: 11px;
	font-weight: bold;
	line-height: 1;
	text-transform: uppercase;

	&.is-mainAccent {
		font-size: 13px;
	}

	&.is-shadeTint {
		opacity: 0.75;
	}
`;
