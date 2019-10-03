/**
 * External dependencies
 */
import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

/**
 * Internal dependencies
 */
import { Link, MDXProvider } from './index';

const NAVIGATION = [ { to: '/', label: 'Home' } ];

export default ( { site, frontmatter = {}, children } ) => {
	const {
		title,
		description: siteDescription,
		keywords: siteKeywords,
	} = site.siteMetadata;

	const {
		keywords: frontmatterKeywords,
		description: frontmatterDescription,
	} = frontmatter;

	const keywords = ( frontmatterKeywords || siteKeywords ).join( ', ' );
	const description = frontmatterDescription || siteDescription;

	return (
		<Fragment>
			<Helmet
				title={ title }
				meta={ [
					{ name: 'description', content: description },
					{ name: 'keywords', content: keywords },
				] }
			>
				<html lang="en" />
			</Helmet>

			<MDXProvider>
				<Fragment>
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
				</Fragment>
			</MDXProvider>
		</Fragment>
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
