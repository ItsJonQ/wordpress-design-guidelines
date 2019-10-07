/**
 * External dependencies
 */
import React from 'react';
import GatsbyLink from 'gatsby-link';

export default function Link( props ) {
	const { children, rel: relProp, target, to, ...restProps } = props;
	const internal = /^\/(?!\/)/.test( to );

	if ( internal ) {
		return (
			<GatsbyLink to={ to } { ...restProps }>
				{ children }
			</GatsbyLink>
		);
	}

	const isOpenInNewTab = target === '_blank';
	const safeRel = isOpenInNewTab ? 'noreferrer noopener' : '';

	const linkProps = {
		...restProps,
		rel: relProp || safeRel,
	};

	return (
		<a href={ to } { ...linkProps }>
			{ children }
		</a>
	);
}
