/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import Item from './item';
import { useColorPaletteContext } from './context';

export default function ColorPaletteHeader() {
	const { value, _meta } = useColorPaletteContext();
	const { baseName, index } = _meta;

	const name = `${ baseName } ${ index }`;

	return <Item isHeader name={ name } value={ value } />;
}
