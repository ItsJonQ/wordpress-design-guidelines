/**
 * External dependencies
 */
import React from 'react';
import { storiesOf } from '@storybook/react';

/**
 * Internal dependencies
 */
import { ColorInfo } from './index';

const stories = storiesOf( 'ColorInfo/ColorInfo', module );

stories.add( 'Default', () => <ColorInfo /> );
