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
import ItemLabel from './item-label';
import {
	shouldUseLightText,
	useClassNames,
	useClearTimeout,
} from '../../utils';

export default function ColorPaletteItem( props ) {
	const [ classnames ] = useClassNames( props, 'ColorPaletteItem' );
	const { isHeader, name, value, id } = props;

	const [ isCopied, setCopied ] = useState( false );
	const ref = useRef( null );
	const isLightText = shouldUseLightText( value );
	const isShadeTint = getIsShadeTint( props );
	const isMainAccent = getIsMainAccent( props );

	let copiedTimeout;
	useClearTimeout( copiedTimeout );

	const handleOnClick = ( event ) => {
		event.preventDefault();
		copyToClipboard( value );
		setCopied( true );

		copiedTimeout = setTimeout( () => {
			setCopied( false );
		}, 1000 );
	};

	const className = classnames(
		isLightText && 'is-lightText',
		isHeader && 'is-header',
		isMainAccent && 'is-mainAccent',
	);

	const label = name;

	return (
		<ItemUI
			aria-label={ name }
			className={ className }
			data-color-id={ id }
			ref={ ref }
			style={ {
				background: value,
			} }
			onClick={ handleOnClick }
		>
			<Flexy>
				<Flexy.Item>
					<ItemLabel
						isShadeTint={ isShadeTint }
						isMainAccent={ isMainAccent }
					>
						{ isCopied ? 'Copied!' : label }
					</ItemLabel>
				</Flexy.Item>
				<Flexy.Item>{ value }</Flexy.Item>
			</Flexy>
		</ItemUI>
	);
}

ColorPaletteItem.defaultProps = {
	setCurrentColor: () => undefined,
};

function getIsShadeTint( props ) {
	const {
		name: nameProp,
		_meta: { type },
	} = props;
	const name = nameProp.toLowerCase();

	return (
		type === 'accent' &&
		( name.includes( 'shade' ) ||
			name.includes( 'tint' ) ||
			name.includes( 'tone' ) )
	);
}

function getIsMainAccent( props ) {
	const {
		name,
		_meta: { baseName },
	} = props;

	return name === baseName;
}

const ItemUI = styled.button`
	appearance: none;
	border: none;
	border-radius: 4px;
	box-sizing: border-box;
	box-shadow: 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(0, 0, 0, 0);
	cursor: pointer;
	color: rgba(0, 0, 0, 0.75);
	font: inherit;
	font-size: 1.4rem;
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

	&.is-lightText {
		color: white;
	}

	&.is-header {
		padding: 40px 10px;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;

		&:hover,
		&:focus {
			border-radius: 4px;
		}
	}

	&.is-mainAccent {
		padding: 30px 10px;
	}
`;
