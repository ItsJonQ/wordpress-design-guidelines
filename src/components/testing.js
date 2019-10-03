/**
 * External dependencies
 */
import React from 'react';
/**
 * Internal dependencies
 */
import { ColorSet } from './index';
import { getColorCollections } from '../utils';

export default function Testing() {
	const colorCollections = getColorCollections();
	const { blue, gray, accent } = colorCollections;

	return (
		<div>
			<ColorSet set={ blue } />
			<ColorSet set={ gray } />
			<ColorSet set={ accent } />
		</div>
	);
}
