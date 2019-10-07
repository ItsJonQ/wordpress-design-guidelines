/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import { Card } from './index';
import { useClassNames } from '../utils';

export default function CalloutCard( props ) {
	const [ classnames ] = useClassNames( props, 'CalloutCard' );

	return <Card { ...props } className={ classnames() } />;
}
