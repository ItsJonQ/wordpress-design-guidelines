/**
 * External dependencies
 */
import React from 'react';
import { storiesOf } from '@storybook/react';

/**
 * Internal dependencies
 */
import { HexRGB } from './index';

const stories = storiesOf( 'ColorInfo/HexRGB', module );

stories.add( 'Default', () => {
	return (
		<div>
			<HexRGB color="black" />
			<HexRGB color="#dc3232" />
			<HexRGB color="#d54e21" />
			<HexRGB color="#0073aa" />
			<HexRGB color="#685890" />
		</div>
	);
} );
