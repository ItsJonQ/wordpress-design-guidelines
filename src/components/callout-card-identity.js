/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import { useAppContext } from './app-provider';
import { Box, CalloutCard, Link, Text } from './index';

export default function CalloutCardIdentity() {
	const { baseLangUrl } = useAppContext();
	const url = `/${ baseLangUrl }/foundations/identity/`;

	return (
		<Box my={ 4 }>
			<CalloutCard>
				<Text>
					Are you also looking for the{ ' ' }
					<Link to={ url }>official logos</Link>?
				</Text>
			</CalloutCard>
		</Box>
	);
}
