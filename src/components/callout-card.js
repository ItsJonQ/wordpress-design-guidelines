/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import Card from './card';
import { useClassNames } from '../utils';

export default function CalloutCard( props ) {
	const [ classnames ] = useClassNames( props, 'CalloutCard' );

	return <Card { ...props } className={ classnames() } />;
}
