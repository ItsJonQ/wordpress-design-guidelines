/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { Dashicon } from '../index';
import { useClassNames } from '../../utils';

export default function IconBox( props ) {
	const [ classnames ] = useClassNames( props, 'IconBox' );
	const { icon } = props;

	return (
		<CardUI { ...props } className={ classnames() } id={ icon }>
			<IconWrapperUI>
				<Dashicon icon={ icon } />
			</IconWrapperUI>
			<IconMetaUI>{ icon }</IconMetaUI>
		</CardUI>
	);
}

const CardUI = styled.button`
	align-items: center;
	appearance: none;
	background: white;
	border-radius: 8px;
	border: 2px solid transparent;
	color: var(--colorLightGray400);
	cursor: pointer;
	display: flex;
	flex-direction: column;
	font-family: inherit;
	font-size: 0.7em;
	justify-content: flex-start;
	padding: 20px;
	transition: background 100ms linear;
	width: 100%;

	&:focus {
		border-color: var(--colorWordPressBlue);
		outline: none;
	}

	&:hover {
		background: var(--colorLightGray100);
	}

	&:active {
		background: #e6f6fb;
	}

	&:hover,
	&:focus {
		color: var(--colorLightGray700);
	}
`;

const IconWrapperUI = styled.span`
	align-items: center;
	display: flex;
	height: 30px;
	justify-content: center;
	margin: -10px auto 5px;
	pointer-events: none;
	user-select: none;

	svg {
		display: block;
		margin: auto;
	}
`;

const IconMetaUI = styled.span`
	display: block;
	padding: 0 10px;
`;
