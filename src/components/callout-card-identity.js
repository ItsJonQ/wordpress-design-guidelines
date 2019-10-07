/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import { Box, CalloutCard, Link, Text } from './index';

export default function CalloutCardIdentity() {
	return (
		<Box my={ 4 }>
			<CalloutCard>
				<Text>
					Are you also looking for the{ ' ' }
					<Link
						to="https://make.wordpress.org/design/handbook/design-guide/foundations/identity/"
						target="_blank"
					>
						official logos
					</Link>
					?
				</Text>
			</CalloutCard>
		</Box>
	);
}
