/**
 * External dependencies
 */
import React from 'react';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import { useAppContext } from './app-provider';
import { Box, CalloutCard, Link, Text } from './index';

// TODO: REFACTOR TO GLOBAL LABELS
const labels = {
	en: {
		message: 'Are you also looking for the',
		link: 'official logos',
	},
};
// TODO: REFACTOR OR USE i18n TRANSLATION METHOD
const t = ( lang = 'en', prop ) => {
	const fallback = get( labels, `en.${ prop }` );
	return get( labels, `${ lang }.${ prop }`, fallback );
};

export default function CalloutCardIdentity() {
	const { baseLangUrl, lang } = useAppContext();
	const url = `/${ baseLangUrl }/foundations/identity/`;

	const message = t( lang, 'message' );
	const link = t( lang, 'link' );

	return (
		<Box my={ 4 }>
			<CalloutCard>
				<Text>
					{ message }{ ' ' }
					<Link to={ url }>{ link }</Link>?
				</Text>
			</CalloutCard>
		</Box>
	);
}
