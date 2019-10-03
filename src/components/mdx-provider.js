/**
 * External dependencies
 */
import React from 'react';
import { MDXProvider as BaseMDXProvider } from '@mdx-js/react';
/**
 * Internal dependencies
 */
import { MDXLayoutComponents, MDXGlobalComponents } from './mdx';

export default function MDXProvider( props ) {
	return (
		<BaseMDXProvider
			{ ...props }
			components={ {
				...MDXLayoutComponents,
				...MDXGlobalComponents,
			} }
		/>
	);
}
