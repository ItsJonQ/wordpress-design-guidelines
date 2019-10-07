/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { Box, Card as BaseCard, Flexy, HR, Text } from '../index';
import { HexRGB, Swatch } from './index';
import {
	getContrastScore,
	shouldUseLightText,
	useClassNames,
} from '../../utils';

const defaultProps = {
	color: '#0055ff',
	name: 'WordPress Blue',
};

export default function Card( props ) {
	const [ classnames ] = useClassNames( 'ColorInfoCard', props );
	const { color, name, subtitle } = props;
	const contrastScore = getContrastScore( color );
	const isLightText = shouldUseLightText( color );
	const textLabel = isLightText ? 'light' : 'dark';

	return (
		<CardUI className={ classnames() }>
			<TitleUI>{ name }</TitleUI>
			{ subtitle && (
				<SubtitleUI>
					<Text isMuted size={ 13 }>
						{ subtitle }
					</Text>
				</SubtitleUI>
			) }
			<Box mb={ 2 }>
				<Flexy>
					<Flexy.Item>
						<Box mr={ 2 }>
							<Swatch color={ color } />
						</Box>
					</Flexy.Item>
					<Flexy.Block>
						<Text isBlock isMuted size={ 12 }>
							Contrast Score
						</Text>
						<Text>{ contrastScore }</Text>
					</Flexy.Block>
				</Flexy>
			</Box>
			<Text isMuted size={ 13 }>
				Use <strong>{ textLabel }</strong> text with this color
			</Text>
			<HR spacing="sm" />
			<HexRGB color={ color } />
		</CardUI>
	);
}

Card.defaultProps = defaultProps;

const CardUI = styled( BaseCard )`
	max-height: 480px;
	width: 280px;
`;

const TitleUI = styled.div`
	font-size: 1.6rem;
	font-weight: bold;
	margin-bottom: 8px;
`;

const SubtitleUI = styled.div`
	margin-top: -8px;
	margin-bottom: 8px;
`;
