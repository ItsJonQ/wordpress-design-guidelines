/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { getWCAGScore, shouldUseLightText, useClassNames } from '../../utils';

export default function Swatch( props ) {
	const { color, style: styleProp, ...restProps } = props;
	const [ classnames ] = useClassNames( 'ColorInfoSwatch', props );

	const isLightText = shouldUseLightText( color );
	const score = getWCAGScore( color );

	const style = {
		...styleProp,
		backgroundColor: color,
		color: isLightText ? 'white' : 'black',
	};

	return (
		<SwatchUI { ...restProps } className={ classnames() } style={ style }>
			{ score }
		</SwatchUI>
	);
}

const SwatchUI = styled.div`
	align-items: center;
	border-radius: 8px;
	color: white;
	display: flex;
	font-weight: bold;
	height: 40px;
	justify-content: center;
	width: 40px;
`;
