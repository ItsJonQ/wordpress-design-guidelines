/**
 * External dependencies
 */
import React from 'react';
import GatsbyLink from 'gatsby-link';

export default function Link( props ) {
	const { children, to, ...restProps } = props;
	const internal = /^\/(?!\/)/.test( to );

	if ( internal ) {
		return (
			<GatsbyLink to={ to } { ...restProps }>
				{ children }
			</GatsbyLink>
		);
	}

	return (
		<a href={ to } { ...restProps }>
			{ children }
		</a>
	);
}
