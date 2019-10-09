/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import {
	Box,
	Container,
	Flexy,
	GithubLogo,
	Link,
	WordPressLogo,
} from './index';
import { useClassNames } from '../utils';

export default function SiteHeader( props ) {
	const [ classnames ] = useClassNames( props, 'SiteHeader' );

	return (
		<SiteHeaderUI className={ classnames() }>
			<Container>
				<ContentUI>
					<Flexy>
						<Flexy.Item>
							<Link isBlock isPlain to="/">
								<LogoUI>
									<WordPressLogo />
									<Box ml={ 2 }>Design Guidelines</Box>
								</LogoUI>
							</Link>
						</Flexy.Item>
						<Flexy.Item>
							<Link
								isBlock
								isPlain
								to="https://github.com/itsjonq/wordpress-design-guidelines"
								title="See on Github"
							>
								<GithubLogo />
							</Link>
						</Flexy.Item>
					</Flexy>
				</ContentUI>
			</Container>
		</SiteHeaderUI>
	);
}

const SiteHeaderUI = styled.div`
	background: var(--colorDarkGray800);
	box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
	height: 50px;
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 100;

	a {
		color: white;
	}
`;

const LogoUI = styled.div`
	font-weight: bold;
	text-decoration: none;
	display: flex;
	align-items: center;
`;

const ContentUI = styled.div`
	align-items: center;
	display: flex;
	min-height: 50px;
`;
