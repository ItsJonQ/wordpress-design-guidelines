/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
// import Header from './header';
import Item from './item';
import { ColorPaletteProvider } from './context';
import { useClassNames } from '../../utils';

export default function ColorPalette( props ) {
	const [ classnames ] = useClassNames( props, 'ColorPalette' );
	const { isGrid, colors, ...restProps } = props;
	const className = classnames( isGrid && 'is-grid' );

	return (
		<ColorPaletteProvider { ...restProps }>
			<StyledPalette className={ className }>
				{ colors.map( ( item ) => {
					return <Item { ...item } key={ item.id } />;
				} ) }
			</StyledPalette>
		</ColorPaletteProvider>
	);
}

ColorPalette.defaultProps = {
	isGrid: false,
	setCurrentColor: () => undefined,
};

const StyledPalette = styled.div`
	width: 100%;

	&.is-grid {
		max-width: calc(100% - 20px);
		margin: 0 10px 20px;

		@media (min-width: 768px) {
			max-width: calc(50% - 20px);
		}
	}
`;
