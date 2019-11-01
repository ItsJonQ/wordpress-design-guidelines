/**
 * External dependencies
 */
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

/**
 * Internal dependencies
 */
import {
	AppProvider,
	GlobalStyles,
	SiteSidebarNav,
	SiteLayout,
	SEO,
} from '../components';
import { useAppContext } from '../components/app-provider';
import { getNavLinks } from './nav-utils';

export default function Template( props ) {
	const { mdx } = props.data;

	return (
		<AppProvider { ...props }>
			<SiteLayout sidebar={ <Navigation /> }>
				<GlobalStyles />
				<SEO { ...props } />
				<PageUI>
					<MDXRenderer>{ mdx.body }</MDXRenderer>
				</PageUI>
			</SiteLayout>
		</AppProvider>
	);
}

const Navigation = () => {
	const { lang } = useAppContext();
	const links = getNavLinks( lang );

	return <SiteSidebarNav links={ links } title="Foundations" />;
};

const PageUI = styled.div`
	max-width: 800px;
	margin: auto;
`;

export const pageQuery = graphql`
	query($id: String!) {
		site {
			...site
		}
		mdx(fields: { id: { eq: $id } }) {
			frontmatter {
				title
				description
			}
			fields {
				lang
			}
			body
		}
	}
`;
