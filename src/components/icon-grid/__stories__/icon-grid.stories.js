/**
 * External dependencies
 */
import React from 'react';
import { storiesOf } from '@storybook/react';

/**
 * Internal dependencies
 */
import { IconGrid } from '../index';

const stories = storiesOf( 'IconGrid/IconGrid', module );

stories.add( 'Default', () => {
	return <IconGrid />;
} );
