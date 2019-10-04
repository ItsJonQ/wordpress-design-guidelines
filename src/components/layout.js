/**
 * External dependencies
 */
import React from 'react';
import { graphql } from 'gatsby';

/**
 * Internal dependencies
 */
import { PageLayout, SEO } from './index';

export default ( { site, frontmatter = {}, children } ) => {
	const { description: siteDescription } = site.siteMetadata;

	const { description: frontmatterDescription } = frontmatter;

	const description = frontmatterDescription || siteDescription;

	return (
		<PageLayout>
			<SEO { ...site.siteMetadata } description={ description } />
			{ children }
		</PageLayout>
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
