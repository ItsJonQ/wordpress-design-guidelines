/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { Label } from './index';
import { useClassNames, noop } from '../utils';

export default function Input( props ) {
	const { label, size, ...rest } = props;
	const [ classnames ] = useClassNames( props, 'Input' );

	const className = classnames( size && `is-size-${ size }` );
	const labelMarkup = label ? <Label>{ label }</Label> : null;

	return (
		<>
			{ labelMarkup }
			<InputUI { ...rest } className={ className } />
		</>
	);
}

Input.defaultProps = {
	onChange: noop,
};

const InputUI = styled.input`
	border-radius: 4px;
	border: 1px solid var(--colorLightGray800);
	box-shadow: 0 0 0 transparent;
	font-size: 1.6rem;
	padding: 6px 8px;
	width: 100%;
	transition: box-shadow 0.1s linear;

	@media (min-width: 600px) {
		font-size: 1.4rem;
	}

	&:focus {
		border-color: var(--colorWordPressBlue);
		box-shadow: 0 0 0 1px var(--colorWordPressBlue);
		color: var(--colorDarkGray900);
		outline-offset: -2px;
		outline: 2px solid transparent;
	}

	&.is-size-sm {
		padding: 4px 8px;

		@media (min-width: 600px) {
			font-size: 1.3rem;
		}
	}
`;
