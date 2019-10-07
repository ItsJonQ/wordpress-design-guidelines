/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { useClassNames } from '../utils';

export default function Text( props ) {
	const [ classnames ] = useClassNames( props, 'Text' );
	const { align, isBlock, isMuted, isUppercase, size, ...restProps } = props;

	const className = classnames(
		align && `is-align-${ align }`,
		isBlock && 'is-block',
		isMuted && 'is-muted',
		isUppercase && 'is-uppercase',
		size && `is-size-${ size }`,
	);

	return <TextUI { ...restProps } className={ className } />;
}

const TextUI = styled.span`
	font-size: 1.6rem;
	color: var(--colorText);

	&.is-block {
		display: block;
	}

	&.is-muted {
		opacity: 0.7;
	}

	&.is-uppercase {
		letter-spacing: 0.5px;
		text-transform: uppercase;
	}

	&.is-align {
		&-left {
			text-align: left;
		}
		&-center {
			text-align: center;
		}
		&-right {
			text-align: right;
		}
	}

	&.is-size {
		&-10 {
			font-size: 1rem;
		}
		&-11 {
			font-size: 1.1rem;
		}
		&-12 {
			font-size: 1.2rem;
		}
		&-13 {
			font-size: 1.3rem;
		}
		&-14 {
			font-size: 1.4rem;
		}
		&-16 {
			font-size: 1.6rem;
		}
	}
`;
