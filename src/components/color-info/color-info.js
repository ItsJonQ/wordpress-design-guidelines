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

export default function ColorInfo( props ) {
	const { currentColor } = useAppContext();
	const [ classnames ] = useClassNames( 'ColorInfo', props );

	const { name, accentName, value } = currentColor || {};
	const shouldShowCard = !! name;
	const isOpen = shouldShowCard;

	return (
		<Sidebox className={ classnames() } isOpen={ isOpen }>
			{ shouldShowCard && (
				<Card name={ name } color={ value } subtitle={ accentName } />
			) }
		</Sidebox>
	);
}
