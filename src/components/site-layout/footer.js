/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { Box, Link, HR, Text } from '../index';
import { useClassNames } from '../../utils';

export default function SiteLayoutFooter( props ) {
	const [ classnames ] = useClassNames( props, 'SiteLayoutFooter' );

	return (
		<FooterUI { ...props } className={ classnames() }>
			<Box minWidth={ 280 } margin="0 auto 28px" opacity={ 0.5 }>
				<HR size={ 2 } />
			</Box>
			<Text size={ 12 } shade="extraMuted">
				Code is Poetry. Made by{ ' ' }
				<Link isPlain href="https://jonquach.com">
					Q
				</Link>{ ' ' }
				for{ ' ' }
				<Link isPlain href="https://wordpress.org/">
					WordPress
				</Link>
				.
			</Text>
		</FooterUI>
	);
}

const FooterUI = styled.div`
	padding: 0 80px 40px;
	text-align: center;
`;
