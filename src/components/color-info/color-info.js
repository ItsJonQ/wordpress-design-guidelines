/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import { useAppContext } from '../app-provider';
import { Card, Positioner } from './index';
import { useClassNames } from '../../utils';

export default function ColorInfo( props ) {
	const { currentColor } = useAppContext();
	const [ classnames ] = useClassNames( 'ColorInfo', props );

	if ( ! currentColor ) {
		return null;
	}

	const { name, accentName, value } = currentColor;

	return (
		<div className={ classnames() }>
			<Positioner>
				<Card name={ name } color={ value } subtitle={ accentName } />
			</Positioner>
		</div>
	);
}
