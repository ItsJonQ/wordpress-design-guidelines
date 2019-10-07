/**
 * External dependencies
 */
import React from 'react';
import colorUtil from 'color';

/**
 * Internal dependencies
 */
import { Flexy } from '../index';
import { ValueInput } from './index';
import { useClassNames } from '../../utils';

export default function HexRGB( props ) {
	const [ classnames ] = useClassNames( 'ColorInfoHexRGB', props );
	const { color, ...restProps } = props;

	const colorModel = colorUtil( color );
	const [ r, g, b ] = colorModel.rgb().array();
	const hex = colorModel.hex();

	return (
		<Flexy { ...restProps } className={ classnames() } spacing={ 'sm' }>
			<Flexy.Block>
				<ValueInput label={ 'Hex' } value={ hex } />
			</Flexy.Block>
			<Flexy.Item>
				<ValueInput label={ 'R' } value={ r } width={ 44 } />
			</Flexy.Item>
			<Flexy.Item>
				<ValueInput label={ 'G' } value={ g } width={ 44 } />
			</Flexy.Item>
			<Flexy.Item>
				<ValueInput label={ 'B' } value={ b } width={ 44 } />
			</Flexy.Item>
		</Flexy>
	);
}

HexRGB.defaultProps = {
	color: '#000',
};
