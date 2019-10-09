/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import { Box, Flexy, HR, Text } from '../index';
import { Title, Subtitle } from '../sidebox';
import { HexRGB, Swatch } from './index';
import {
	getContrastScore,
	shouldUseLightText,
	useClassNames,
} from '../../utils';

export default function Card( props ) {
	const [ classnames ] = useClassNames( 'ColorInfoCard', props );
	const { color, name, subtitle } = props;
	const contrastScore = getContrastScore( color );
	const isLightText = shouldUseLightText( color );
	const textLabel = isLightText ? 'light' : 'dark';

	return (
		<Box className={ classnames() }>
			<Title>{ name }</Title>
			<Subtitle>{ subtitle }</Subtitle>
			<Box mb={ 2 }>
				<Flexy>
					<Flexy.Item>
						<Box mr={ 2 }>
							<Swatch color={ color } />
						</Box>
					</Flexy.Item>
					<Flexy.Block>
						<Text isBlock shade="muted" size={ 12 }>
							Contrast Score
						</Text>
						<Text isBlock>{ contrastScore }</Text>
					</Flexy.Block>
				</Flexy>
			</Box>
			<Text shade="muted" size={ 13 }>
				Use <strong>{ textLabel }</strong> text with this color
			</Text>
			<HR spacing="sm" />
			<HexRGB color={ color } />
		</Box>
	);
}

Card.defaultProps = {
	color: '#0055ff',
	name: 'WordPress Blue',
};
