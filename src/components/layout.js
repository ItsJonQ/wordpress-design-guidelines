/**
 * External dependencies
 */
import React from 'react';
import { graphql } from 'gatsby';

/**
 * Internal dependencies
 */
import { Link, MDXProvider, SEO } from './index';

const NAVIGATION = [ { to: '/', label: 'Home' } ];

export default ( { site, frontmatter = {}, children } ) => {
	const { description: siteDescription } = site.siteMetadata;

	const { description: frontmatterDescription } = frontmatter;

	const description = frontmatterDescription || siteDescription;

	return (
		<>
			<SEO { ...site.siteMetadata } description={ description } />
			<MDXProvider>
				<>
					<ul>
						{ NAVIGATION.map( ( navigation ) => (
							<li key={ navigation.label }>
								<Link to={ navigation.to }>
									{ navigation.label }
								</Link>
							</li>
						) ) }
					</ul>

					{ children }
				</>
			</MDXProvider>
		</>
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
