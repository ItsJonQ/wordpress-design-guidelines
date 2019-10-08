/**
 * External dependencies
 */
import React from 'react';
import { storiesOf } from '@storybook/react';

/**
 * Internal dependencies
 */
import { CopyCode } from '../index';

const stories = storiesOf( 'CopyCode/CopyCode', module );

stories.add( 'Default', () => {
	const code = `<span class="dashicons dashicons-calendar-alt"></span>`;
	return <CopyCode value={ code } />;
} );
