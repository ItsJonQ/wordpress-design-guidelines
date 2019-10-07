/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import { AppProvider } from '../providers';

export default function Template( props ) {
	const { children } = props;

	return <AppProvider { ...props }>{ children }</AppProvider>;
}
