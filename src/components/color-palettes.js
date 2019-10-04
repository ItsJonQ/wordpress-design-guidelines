/**
 * External dependencies
 */
import React from 'react';
/**
 * Internal dependencies
 */
import { ColorSet } from './index';
import { getColorCollections, useClassNames } from '../utils';

export default function ColorPalettes( props ) {
	const [ classnames ] = useClassNames( props, 'ColorPalettes' );
	const colorCollections = getColorCollections();
	const { blue, gray, accent } = colorCollections;

	return (
		<div className={ classnames() }>
			<ColorSet set={ blue } />
			<ColorSet set={ gray } />
			<ColorSet set={ accent } />
		</div>
	);
}
