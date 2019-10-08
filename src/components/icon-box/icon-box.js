/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { useAppContext } from '../app-provider';
import { Dashicon } from '../index';
import { useClassNames, noop } from '../../utils';

export default function IconBox( props ) {
	const { setCurrentIcon } = useAppContext();
	const [ classnames ] = useClassNames( props, 'IconBox' );
	const { icon, onClick } = props;

	const handleOnClick = ( event ) => {
		onClick( event );
		setCurrentIcon( icon );
	};

	return (
		<CardUI
			{ ...props }
			className={ classnames() }
			id={ `icon-${ icon }` }
			onClick={ handleOnClick }
		>
			<IconWrapperUI>
				<Dashicon icon={ icon } />
			</IconWrapperUI>
			<IconMetaUI>{ icon }</IconMetaUI>
		</CardUI>
	);
}

IconBox.defaultProps = {
	icon: 'admin-appearance',
	onClick: noop,
};

const CardUI = styled.button`
	align-items: center;
	appearance: none;
	background: white;
	border-radius: 8px;
	border: 2px solid transparent;
	color: var(--colorDarkGray400);
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
		background: var(--colorLightGray200);
	}

	&:focus,
	&:hover {
		path {
			fill: var(--colorDarkGray700);
		}
	}

	&:active {
		background: #e6f6fb;
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
