/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { ColorPalette } from './index';
import { useClassNames } from '../utils';

export default function ColorSet( props ) {
	const [ classnames ] = useClassNames( props, 'ColorSet' );
	const { set } = props;
	const { colors } = set;

	return (
		<StyledGrid className={ classnames() }>
			{ colors.map( ( collection ) => (
				<ColorPalette
					isGrid
					colors={ collection.colors }
					key={ collection.id }
				/>
			) ) }
		</StyledGrid>
	);
}

const StyledGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0 -10px;
`;
