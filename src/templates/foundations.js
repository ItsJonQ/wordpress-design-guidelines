/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

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

export default function Template( props ) {
	const { children } = props;

	return (
		<AppProvider { ...props }>
			<SiteLayout sidebar={ <Navigation /> }>
				<GlobalStyles />
				<SEO { ...props } />
				<PageUI>{ children }</PageUI>
			</SiteLayout>
		</AppProvider>
	);
}

const Navigation = () => {
	const links = [
		{
			to: '/foundations/',
			label: 'Get Started',
		},
		{
			to: '/foundations/identity/',
			label: 'Identity',
		},
		{
			to: '/foundations/colors/',
			label: 'Colors',
		},
		{
			to: '/foundations/typography/',
			label: 'Iconography',
		},
	];

	return <SiteSidebarNav links={ links } title="Foundations" />;
};

const PageUI = styled.div`
	max-width: 800px;
	margin: auto;
`;
