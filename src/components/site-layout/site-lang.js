/**
 * External dependencies
 */
import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * Internal dependencies
 */
import { useAppContext } from '../app-provider';

export default function SiteLang() {
	const { lang } = useAppContext();

	return (
		<Helmet>
			<html lang={ lang } />
		</Helmet>
	);
}
