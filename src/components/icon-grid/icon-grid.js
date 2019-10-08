/**
 * External dependencies
 */
import React, { useState } from 'react';
import styled from 'styled-components';
import pluralize from 'pluralize';

/**
 * Internal dependencies
 */
import { Box, Input, IconBox, Text } from '../index';
import { useClassNames, getIcons } from '../../utils';

const initialIcons = getIcons();

export default function IconGrid( props ) {
	const [ query, setQuery ] = useState( '' );
	const [ classnames ] = useClassNames( props, 'IconGrid' );

	const handleOnChange = ( event ) => {
		const {
			target: { value },
		} = event;
		setQuery( value );
	};

	const icons = getFilteredIcons( query );
	const iconCount = icons.length;
	const iconCountLabel = pluralize( 'icon', iconCount );

	return (
		<ContainerUI>
			<SearchBarUI>
				<Box mb={ 1 }>
					<Input onChange={ handleOnChange } value={ query } />
				</Box>
				<Text size={ 13 } isMuted>
					<strong>{ iconCount }</strong> { iconCountLabel }
				</Text>
			</SearchBarUI>
			<IconGridUI { ...props } className={ classnames() }>
				{ icons.map( ( icon ) => (
					<IconBox icon={ icon } key={ icon } />
				) ) }
			</IconGridUI>
		</ContainerUI>
	);
}

function getFilteredIcons( query ) {
	if ( ! query ) {
		return initialIcons;
	}

	return initialIcons.filter( ( icon ) => icon.includes( query ) );
}

const ContainerUI = styled.div`
	padding: 0 0;
`;

const SearchBarUI = styled.div`
	background: white;
	margin-top: -10px;
	padding: 10px 0;
	position: sticky;
	top: 0;
`;

const IconGridUI = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0px -10px;

	& > * {
		width: calc(100% / 2 - 20px);
		margin: 0 10px 10px;

		@media (min-width: 768px) {
			width: calc(100% / 4 - 20px);
		}
	}
`;
