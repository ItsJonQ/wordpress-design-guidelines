/**
 * External dependencies
 */
import React, { useState } from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { IconBox } from '../index';
import { SearchBar } from './index';
import { useClassNames, getIcons } from '../../utils';

const initialIcons = getIcons();

export default function IconGrid( props ) {
	const [ query, setQuery ] = useState( '' );
	const [ classnames ] = useClassNames( props, 'IconGrid' );

	const icons = getFilteredIcons( query );
	const iconCount = icons.length;

	return (
		<ContainerUI>
			<SearchBar onChange={ setQuery } iconCount={ iconCount } />
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
