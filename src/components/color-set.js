/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { ColorPalette } from './index';
import { getColorCollections, useClassNames } from '../utils';

const colorCollections = getColorCollections();

export default function ColorSet( props ) {
	const [ classnames ] = useClassNames( props, 'ColorSet' );
	const { set } = props;
	const colorSet = colorCollections[ set ];

	if ( ! colorSet ) {
		return null;
	}

	const { colors } = colorSet;

	return (
		<GridUI className={ classnames() }>
			{ colors.map( ( collection ) => (
				<ColorPalette
					isGrid
					colors={ collection.colors }
					key={ collection.id }
				/>
			) ) }
		</GridUI>
	);
}

const GridUI = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0 -10px;
`;
