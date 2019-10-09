/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import { Box, Text } from './index';
import { useClassNames } from '../utils';

export default function TopLink( props ) {
	const [ classnames ] = useClassNames( props, 'TopLink' );

	return (
		<Box className="TopLinkWrapper" textAlign="right">
			<a { ...props } className={ classnames() } href="#top">
				<Text size="12">Top ↑</Text>
			</a>
		</Box>
	);
}
