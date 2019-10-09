/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { useClassNames } from '../utils';

export default function Heading( props ) {
	const { size, shade, ...restProps } = props;
	const [ classnames ] = useClassNames( props, 'Heading' );

	const className = classnames(
		size && `is-headingSize-${ size }`,
		shade && `is-shade-${ shade }`,
	);

	return <HeadingUI { ...restProps } className={ className } />;
}

const HeadingUI = styled.div`
	&.is-headingSize-xs {
		font-size: 1.2rem;
		font-weight: bold;
		letter-spacing: 0.5px;
		text-transform: uppercase;
	}

	&.is-shade {
		&-muted {
			color: var(--colorDarkGray400);
		}
		&-extraMuted {
			color: var(--colorDarkGray200);
		}
	}
`;
