/**
 * External dependencies
 */
import React, { useContext } from 'react';

export const ColorPaletteContext = React.createContext( {} );
export const useColorPaletteContext = () => useContext( ColorPaletteContext );

export function ColorPaletteProvider( props ) {
	const { children, ...restProps } = props;
	const { Provider } = ColorPaletteContext;

	const { currentColor } = props;

	const getIsCurrentColor = ( color = {} ) => {
		const { value } = color;
		return currentColor ? currentColor.value === value : false;
	};

	const contextProps = {
		...restProps,
		getIsCurrentColor,
	};

	return (
		<Provider value={ contextProps }>
			<>{ children }</>
		</Provider>
	);
}
