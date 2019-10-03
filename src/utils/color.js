/**
 * External dependencies
 */
/**
 * Internal dependencies
 */
import colorMetaData from '../data/colors.meta.json';
import colorUtil from 'color';
import { get, kebabCase } from 'lodash';

const COLORS_DATA = colorMetaData.colors;
const COLORS = getInitialColors( COLORS_DATA );
const BLUE_COLOR_TYPE = 'blue';
const GRAY_COLOR_TYPE = 'gray';
const ACCENT_COLOR_TYPE = 'accent';

/**
 * Transforms the raw data to create the initial data set.
 * @return {Array} The transformed color data set.
 */
export function getInitialColors() {
	return COLORS_DATA.map( ( color, index ) => {
		const id = `${ getColorId( color ) }-${ index }`;
		const model = colorUtil( color.value );

		return {
			...color,
			id,
			model,
			rgb: model.object(),
			hex: model.hex(),
			luminosity: model.luminosity(),
		};
	} );
}

/**
 * Retrieves the baseName from a color's meta data.
 * @param {Object} color The color meta data.
 * @return {string} The baseName.
 */
export function getColorBaseName( color = {} ) {
	return get( color, '_meta.baseName' );
}

/**
 * Retrieves the type from a color's meta data.
 * @param {Object} color The color meta data.
 * @return {string} The type.
 */
export function getColorType( color = {} ) {
	return get( color, '_meta.type' );
}

/**
 * Generates an id from a color's meta data.
 * @param {Object} color The color meta data.
 * @return {string} The id.
 */
export function getColorId( color = {} ) {
	const { name } = color;
	const baseName = getColorBaseName( color );
	return kebabCase( `${ baseName }-${ name }` || '' );
}

/**
 * Generates an id from a color's type.
 * @param {Object} colorType The color type.
 * @return {string} The id.
 */
export function getCollectionIdByType( colorType = '' ) {
	return kebabCase( `${ colorType }-color-collection` || '' );
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
 * Groups a collection of colors by their baseName meta data.
 * @param {Array} colors Collection of colors.
 * @return {Array} A collection of grouped colors.
 */
export function groupColorsByBaseName( colors = [] ) {
	const groupedColors = colors.reduce( ( map, color ) => {
		const baseName = getColorBaseName( color );
		if ( ! map[ baseName ] ) {
			map[ baseName ] = [];
		}
		map[ baseName ] = [ ...map[ baseName ], color ];
		return map;
	}, {} );

	return Object.keys( groupedColors ).reduce( ( collection, key, index ) => {
		const id = `${ kebabCase( key ) }-color-collection-${ index }`;
		const set = {
			name: key,
			id,
			colors: groupedColors[ key ],
		};
		return [ ...collection, set ];
	}, [] );
}

/**
 * Retrieves a collection of colors by a given type
 * @param {string} colorType The type of color.
 * @return {Array} A collection of colors, if type is found.
 */
export function getGroupedColorsByType( colorType = '' ) {
	if ( ! colorType ) {
		return [];
	}
	return groupColorsByBaseName( getColorsByType( colorType ) );
}

/**
 * Retrieves the collections of colors.
 * @return {Array} A collection of colors.
 */
export function getColorCollections() {
	const blue = {
		title: 'Blue',
		id: getCollectionIdByType( BLUE_COLOR_TYPE ),
		colors: getGroupedColorsByType( BLUE_COLOR_TYPE ),
	};

	const gray = {
		title: 'Gray',
		id: getCollectionIdByType( GRAY_COLOR_TYPE ),
		colors: getGroupedColorsByType( GRAY_COLOR_TYPE ),
	};

	const accent = {
		title: 'Accent',
		id: getCollectionIdByType( ACCENT_COLOR_TYPE ),
		colors: getGroupedColorsByType( ACCENT_COLOR_TYPE ),
	};

	return { blue, gray, accent };
}

/**
 * Determines if the text used with this color should be light.
 * @param {string} color The color.
 * @return {boolean} Result if should use light text.
 */
export function shouldUseLightText( color ) {
	return colorUtil( color ).luminosity() * 100 < 30;
}
