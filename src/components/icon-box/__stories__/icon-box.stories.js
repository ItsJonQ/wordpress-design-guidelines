/**
 * External dependencies
 */
import React from 'react';
import { storiesOf } from '@storybook/react';

/**
 * Internal dependencies
 */
import { IconBox } from '../index';

const stories = storiesOf( 'IconBox/IconBox', module );

stories.add( 'Default', () => {
	return <IconBox />;
} );
