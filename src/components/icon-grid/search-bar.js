/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';
import pluralize from 'pluralize';

/**
 * Internal dependencies
 */
import { Box, Input, Text } from '../index';
import { useClassNames, noop } from '../../utils';

export default function SearchBar( props ) {
	const { iconCount, onChange, value, ...restProps } = props;
	const [ classnames ] = useClassNames( props, 'MyComponent' );

	const iconCountLabel = pluralize( 'icon', iconCount );

	const handleOnChange = ( event ) => {
		onChange( event.target.value, { event } );
	};

	return (
		<SearchBarUI { ...restProps } className={ classnames() }>
			<Box mb={ 1 }>
				<Input
					onChange={ handleOnChange }
					placeholder="Search icon..."
					value={ value }
				/>
			</Box>
			<Text size={ 13 } isMuted>
				<strong>{ iconCount }</strong> { iconCountLabel }
			</Text>
		</SearchBarUI>
	);
}

SearchBar.defaultProps = {
	onChange: noop,
};

const SearchBarUI = styled.div`
	background: white;
	margin-top: -10px;
	padding: 10px 0;
	position: sticky;
	top: 50px;
`;
