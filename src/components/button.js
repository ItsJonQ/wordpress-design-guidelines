// Fork (kinda) from @wordpress/components
// Cannot use that component directly. Something from that library
// references window, causing Gatsby's production compiler to fail.
// This is because window is not available for SSR React.

/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { useClassNames } from '../utils';

export default function Button( props ) {
	const { variant, size } = props;
	const [ classnames ] = useClassNames( props, 'Button' );

	const className = classnames(
		'is-button',
		variant && `is-${ variant }`,
		size && `is-${ size }`,
	);

	return <ButtonUI { ...props } className={ className } />;
}

Button.defaultProps = {
	variant: 'default',
	size: 'md',
};

const ButtonUI = styled.button`
	appearance: none;
	background: none;
	border: 0;
	cursor: pointer;
	display: inline-flex;
	font-size: 1.6rem;
	margin: 0;
	text-decoration: none;
	transition: box-shadow 0.1s linear;
	outline: none;

	&.is-button {
		border-radius: 3px;
		border-style: solid;
		border-width: 1px;
		height: 28px;
		line-height: 26px;
		padding: 0 10px 1px;
		white-space: nowrap;
	}

	&.is-default {
		color: #555;
		border-color: #ccc;
		background: #f7f7f7;
		box-shadow: inset 0 -1px 0 #ccc;
		vertical-align: top;

		&:hover {
			background: #fafafa;
			border-color: #999;
			box-shadow: inset 0 -1px 0 #999;
			color: #23282d;
			text-decoration: none;
		}

		&:focus:enabled {
			background: #fafafa;
			color: #23282d;
			border-color: #999;
			box-shadow: inset 0 -1px 0 #999, 0 0 0 1px #fff, 0 0 0 3px #007cba;
			text-decoration: none;
		}

		&:active:enabled {
			background: #eee;
			border-color: #999;
			box-shadow: inset 0 1px 0 #999;
		}

		&:disabled,
		&[aria-disabled='true'] {
			color: #a0a5aa;
			border-color: #ddd;
			background: #f7f7f7;
			box-shadow: none;
			text-shadow: 0 1px 0 #fff;
			transform: none;
			opacity: 1;
		}
	}

	&:active {
		color: inherit;
	}

	&:disabled,
	&[aria-disabled='true'] {
		cursor: default;
		opacity: 0.3;
	}

	&:focus:not(:disabled) {
		background: #fafafa;
		color: #23282d;
		border-color: #999;
		box-shadow: inset 0 -1px 0 #999, 0 0 0 1px #fff, 0 0 0 3px #007cba;
		text-decoration: none;
	}

	&.is-lg {
		height: 30px;
		line-height: 28px;
		padding: 0 12px 2px;
	}

	&.is-sm {
		height: 24px;
		line-height: 22px;
		padding: 0 8px 1px;
		font-size: 11px;
	}
`;
