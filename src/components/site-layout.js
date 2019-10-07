/**
 * External dependencies
 */
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

/**
 * Internal dependencies
 */
import { GlobalStyles, MDXProvider, SiteHeader } from './index';
import { useClassNames, useAnchorLinks } from '../utils';

export default function SiteLayout( props ) {
	const { children, sidebar } = props;
	const [ classnames ] = useClassNames( props, 'SiteLayout' );

	useAnchorLinks();

	return (
		<ThemeProvider theme={ {} }>
			<>
				<GlobalStyles />
				<SiteHeader />
				<PageWrapperUI className="SiteLayoutWrapper">
					<PageUI className={ classnames() }>
						<SidebarUI className="SiteLayoutSidebar">
							<SidebarContentUI>{ sidebar }</SidebarContentUI>
						</SidebarUI>
						<BodyUI className="SiteLayoutBody">
							<ContentUI className="SiteLayoutContent">
								<MDXProvider>{ children }</MDXProvider>
							</ContentUI>
						</BodyUI>
					</PageUI>
				</PageWrapperUI>
			</>
		</ThemeProvider>
	);
}

const PageWrapperUI = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	min-height: calc(100vh - 50px);
	width: 100%;
`;

const PageUI = styled.div`
	align-items: stretch;
	display: flex;
	flex: 1;
	height: 100%;
`;

const SidebarUI = styled.div`
	position: relative;
	width: 250px;
	border-right: 1px solid rgba(0, 0, 0, 0.04);
	margin-left: calc((100vw - 1080px) / 2);
`;

const SidebarContentUI = styled.div`
	padding: 32px 0 100px;
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	overflow-y: auto;
`;

const BodyUI = styled.div`
	background: white;
	width: 100%;
`;

const ContentUI = styled.div`
	padding: 40px 80px 200px;
	max-width: 820px;
`;
