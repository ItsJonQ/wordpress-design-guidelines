/**
 * External dependencies
 */
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

/**
 * Internal dependencies
 */
import { Container, GlobalStyles, MDXProvider, SiteHeader } from '../index';
import { Content, Footer, SiteLang } from './index';
import { useClassNames, useAnchorLinks } from '../../utils';

export default function SiteLayout( props ) {
	const { children, sidebar } = props;
	const [ classnames ] = useClassNames( props, 'SiteLayout' );

	useAnchorLinks();

	const hasSidebar = !! sidebar;
	const topId = 'top';

	return (
		<ThemeProvider theme={ {} }>
			<>
				<GlobalStyles />
				<SiteHeader />
				<SiteLang />
				<Container>
					<div id={ topId } />
					<PageWrapperUI className="SiteLayoutWrapper">
						<PageUI className={ classnames() }>
							{ hasSidebar && (
								<SidebarUI className="SiteLayoutSidebar">
									<SidebarContentUI>
										{ sidebar }
									</SidebarContentUI>
								</SidebarUI>
							) }
							<BodyUI className="SiteLayoutBody">
								<Content isCentered={ ! hasSidebar }>
									<MDXProvider>{ children }</MDXProvider>
								</Content>
								<Footer />
							</BodyUI>
						</PageUI>
					</PageWrapperUI>
				</Container>
			</>
		</ThemeProvider>
	);
}

const PageWrapperUI = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	padding-top: 50px;
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
	border-right: 1px solid rgba(0, 0, 0, 0.08);
`;

const SidebarContentUI = styled.div`
	padding: 50px 0 100px;
	position: sticky;
	top: 50px;
	left: 0;
	width: 100%;
	overflow-y: auto;
	margin-top: 0px;
`;

const BodyUI = styled.div`
	background: white;
	width: 100%;
	min-height: calc(100vh - 50px);
	display: flex;
	flex-direction: column;
`;
