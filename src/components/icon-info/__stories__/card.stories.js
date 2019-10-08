/**
 * External dependencies
 */
import React from 'react';
import { storiesOf } from '@storybook/react';

/**
 * Internal dependencies
 */
import { Card } from '../index';

const stories = storiesOf( 'IconInfo/Card', module );

stories.add( 'Default', () => {
	return <Card />;
} );
