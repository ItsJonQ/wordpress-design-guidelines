/**
 * External dependencies
 */
import React from 'react';
import { graphql } from 'gatsby';

/**
 * Internal dependencies
 */
import { SiteLayout, SEO } from './index';

export default ( { site, frontmatter = {}, children } ) => {
	const { description: siteDescription } = site.siteMetadata;

	const { description: frontmatterDescription } = frontmatter;

	const description = frontmatterDescription || siteDescription;

	return (
		<SiteLayout>
			<SEO { ...site.siteMetadata } description={ description } />
			{ children }
		</SiteLayout>
	);
};

export const pageQuery = graphql`
	fragment site on Site {
		siteMetadata {
			title
			description
			author
			keywords
		}
	}
`;
