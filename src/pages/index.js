/**
 * External dependencies
 */
import React from 'react';
import { graphql } from 'gatsby';

/**
 * Internal dependencies
 */
import Layout from '../components/layout';

export default function Index( { data: { site } } ) {
	return <Layout site={ site }>Landing Page</Layout>;
}

export const pageQuery = graphql`
	query {
		site {
			...site
		}
	}
`;
