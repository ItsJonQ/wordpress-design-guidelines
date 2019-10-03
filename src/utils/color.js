/**
 * External dependencies
 */
/**
 * Internal dependencies
 */
import colorMetaData from '../data/colors.meta.json';
// import colorUtil from 'color';
import { get } from 'lodash';

const COLORS = colorMetaData.colors;
const BLUE_COLOR_TYPE = 'blue';
const GRAY_COLOR_TYPE = 'gray';
const ACCENT_COLOR_TYPE = 'accent';

/**
 * Retrieves the type from a color's meta data.
 * @param {Object} color The color meta data.
 * @return {string} The type.
 */
export function getColorType( color = {} ) {
	return get( color, '_meta.type' );
}

/**
 * Retrieves a collection of colors by a given type
 * @param {string} colorType The type of color.
 * @return {Array} A collection of colors, if type is found.
 */
export function getColorsByType( colorType = '' ) {
	if ( ! colorType ) {
		return [];
	}
	return COLORS.filter( ( color ) => getColorType( color ) === colorType );
}

/**
 * Retrieves the collections of colors.
 * @return {Array} A collection of colors.
 */
export function getColorCollections() {
	const blue = {
		title: 'Blue',
		colors: getColorsByType( BLUE_COLOR_TYPE ),
	};

	const gray = {
		title: 'Gray',
		colors: getColorsByType( GRAY_COLOR_TYPE ),
	};

	const accent = {
		title: 'Accent',
		colors: getColorsByType( ACCENT_COLOR_TYPE ),
	};

	return { blue, gray, accent };
}
