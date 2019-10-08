/**
 * External dependencies
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { Card } from '../index';

const stories = storiesOf( 'ColorInfo/Card', module );

stories.add( 'Default', () => {
	const colorProps = {
		name: 'WordPress Black',
		color: '#000',
	};

	return (
		<GridUI>
			<Card { ...colorProps } />
			<Card color={ '#fff' } />
			<Card color={ '#dc3232' } name="Accent Red" subtitle="Tint 20%" />
			<Card color={ '#40464d' } />
			<Card color={ '#d54e21' } />
			<Card color={ '#46b450' } />
			<Card color={ '#00a0d2' } />
			<Card color={ '#826eb4' } />
		</GridUI>
	);
} );

const GridUI = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
