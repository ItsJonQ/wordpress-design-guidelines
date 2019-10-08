/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { List, NavLink } from './index';
import { useClassNames } from '../utils';

export default function SiteSidebarNav( props ) {
	const { links, title } = props;
	const [ classnames ] = useClassNames( props, 'SiteSidebarNav' );

	return (
		<SidebarNavUI { ...props } className={ classnames() }>
			{ title && <TitleUI>{ title }</TitleUI> }
			<List isUnstyled>
				{ links.map( ( link ) => (
					<List.Item key={ link.to }>
						<NavLink isBlock to={ link.to }>
							{ link.label }
						</NavLink>
					</List.Item>
				) ) }
			</List>
		</SidebarNavUI>
	);
}

const SidebarNavUI = styled.nav`
	a {
		color: currentColor;
		opacity: 0.7;
		text-decoration: none;
		padding: 4px 0;

		&:hover {
			opacity: 1;
		}

		&.is-active {
			color: var(--colorWordPressBlue);
			opacity: 1;
		}
	}
`;

const TitleUI = styled.div`
	font-size: 1.8rem;
	font-weight: 600;
	margin: 20px 0 16px;
`;
