/**
 * External dependencies
 */
import React from 'react';
import { graphql } from 'gatsby';

/**
 * Internal dependencies
 */
import { Link, Layout } from '../components';

export default function Index( { data: { site } } ) {
	return (
		<Layout site={ site }>
			<Link to="/foundations/">Foundations</Link>
		</Layout>
	);
}

export const pageQuery = graphql`
	query {
		site {
			...site
		}
	}
`;
