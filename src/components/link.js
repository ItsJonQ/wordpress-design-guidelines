/**
 * External dependencies
 */
import React from 'react';
import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { useClassNames } from '../utils';

export default function Link( props ) {
	const {
		children,
		isBlock,
		isPlain,
		rel: relProp,
		target,
		to,
		...restProps
	} = props;
	const internal = /^\/(?!\/)/.test( to );

	const [ classnames ] = useClassNames( props, 'Link' );
	const className = classnames( isBlock && 'is-block', isPlain && 'is-plain' );

	if ( internal ) {
		return (
			<GatsbyLinkUI { ...restProps } to={ to } className={ className }>
				{ children }
			</GatsbyLinkUI>
		);
	}

	const isOpenInNewTab = target === '_blank';
	const safeRel = isOpenInNewTab ? 'noreferrer noopener' : '';

	const linkProps = {
		...restProps,
		rel: relProp || safeRel,
	};

	return (
		<LinkUI { ...linkProps } href={ to } className={ className }>
			{ children }
		</LinkUI>
	);
}

const modifiers = () => `
&.is-block {
	display: block;
}

&.is-plain {
	text-decoration: none;
}
`;

const GatsbyLinkUI = styled( GatsbyLink )`
	${ modifiers }
`;

const LinkUI = styled.a`
	${ modifiers }
`;
