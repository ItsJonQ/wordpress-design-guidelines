/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import { AppProvider } from '../components';

export default function Template( props ) {
	const { children } = props;

	return <AppProvider { ...props }>{ children }</AppProvider>;
}
