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
	const { align, isBlock, shade, isUppercase, size, ...restProps } = props;

	const className = classnames(
		align && `is-align-${ align }`,
		isBlock && 'is-block',
		isUppercase && 'is-uppercase',
		shade && `is-shade-${ shade }`,
		size && `is-size-${ size }`,
	);

	return <TextUI { ...restProps } className={ className } />;
}

const TextUI = styled.span`
	font-size: 1.6rem;
	color: currentColor;

	&.is-block {
		display: block;
	}

	&.is-shade {
		&-muted {
			color: var(--colorDarkGray400);
		}
		&-extraMuted {
			color: var(--colorDarkGray200);
		}
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
