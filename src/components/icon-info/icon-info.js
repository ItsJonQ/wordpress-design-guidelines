/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import { useAppContext } from '../app-provider';
import { Sidebox } from '../index';
import { Card } from './index';
import { useClassNames } from '../../utils';

export default function IconInfo( props ) {
	const { currentIcon } = useAppContext();
	const [ classnames ] = useClassNames( 'IconInfo', props );

	const shouldShowCard = !! currentIcon;
	const isOpen = currentIcon;

	return (
		<Sidebox className={ classnames() } isOpen={ isOpen }>
			{ shouldShowCard && <Card icon={ currentIcon } /> }
		</Sidebox>
	);
}
