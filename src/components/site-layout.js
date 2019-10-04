/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { GlobalStyles, MDXProvider, SiteHeader } from './index';
import { useClassNames } from '../utils';

export default function SiteLayout( props ) {
	const { children } = props;
	const [ classnames ] = useClassNames( props, 'SiteLayout' );

	return (
		<>
			<GlobalStyles />
			<SiteHeader />
			<PageWrapperUI className="SiteLayoutWrapper">
				<PageUI className={ classnames() }>
					<SidebarUI className="SiteLayoutSidebar">
						<SidebarContentUI></SidebarContentUI>
					</SidebarUI>
					<BodyUI className="SiteLayoutBody">
						<ContentUI className="SiteLayoutContent">
							<MDXProvider>{ children }</MDXProvider>
						</ContentUI>
					</BodyUI>
				</PageUI>
			</PageWrapperUI>
		</>
	);
}

const PageWrapperUI = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	min-height: calc(100vh);
	padding-top: 50px;
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
	width: 300px;
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
	padding: 40px 80px 80px;
	max-width: 820px;
`;
