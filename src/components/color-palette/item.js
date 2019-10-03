/**
 * External dependencies
 */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import copyToClipboard from 'copy-to-clipboard';

/**
 * Internal dependencies
 */
import Flexy from '../flexy';
// import { useColorPaletteContext } from './context';
import { shouldUseLightText } from '../../utils';
import { useClearTimeout } from '../../utils/hooks';

export default function ColorPaletteItem( props ) {
	// const {
	// 	getIsCurrentColor,
	// 	setCurrentColor,
	// 	_meta: { baseName },
	// } = useColorPaletteContext();

	const { isHeader, name, value, id } = props;

	const [ isCopied, setCopied ] = useState( false );
	const ref = useRef( null );
	const isLightText = shouldUseLightText( value );
	// const isCurrent = getIsCurrentColor( { value } );

	let copiedTimeout;
	useClearTimeout( copiedTimeout );

	// useFocusRef( ref, isCurrent );
	// useScrollRefIntoView( ref, isCurrent );

	const handleOnClick = ( event ) => {
		event.preventDefault();
		copyToClipboard( value );
		setCopied( true );

		// setCurrentColor( props );

		copiedTimeout = setTimeout( () => {
			setCopied( false );
		}, 1000 );
	};

	const className = isHeader ? 'is-header' : '';
	// const itemName = baseName ? name.replace( baseName, '' ) : name;
	// const baseId = getColorId( { name } );

	// const id = isHeader ? `main-${ baseId }` : baseId;
	// const label = isHeader ? baseName : itemName;
	const label = name;

	return (
		<StyledItem
			aria-label={ name }
			className={ className }
			data-color-id={ id }
			ref={ ref }
			style={ {
				background: value,
				color: isLightText ? 'white' : 'black',
			} }
			onClick={ handleOnClick }
		>
			<Flexy>
				<Flexy.Item>{ isCopied ? 'Copied!' : label }</Flexy.Item>
				<Flexy.Item>{ value }</Flexy.Item>
			</Flexy>
		</StyledItem>
	);
}

ColorPaletteItem.defaultProps = {
	setCurrentColor: () => undefined,
};

const StyledItem = styled.button`
	appearance: none;
	border: none;
	box-sizing: border-box;
	box-shadow: 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(0, 0, 0, 0);
	font: inherit;
	cursor: pointer;
	display: block;
	padding: 12px 10px;
	position: relative;
	transform: scale(1);
	transition: transform 100ms ease, box-shadow 100ms ease;
	width: 100%;
	z-index: 0;

	&:hover,
	&:focus {
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.2);
		outline: none;
		transform: scale(1.05);
		z-index: 2;
	}

	&:active {
		transition: transform 50ms ease, box-shadow 50ms ease;
		transform: scale(1.02);
	}

	&.is-header {
		padding: 30px 10px;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;

		&:hover,
		&:focus {
			border-radius: 4px;
		}
	}
`;
