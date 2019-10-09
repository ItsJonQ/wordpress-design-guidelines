/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { useClassNames } from '../utils';

export default function HR( props ) {
	const { size, spacing, style: styleProp, ...restProps } = props;
	const [ classnames ] = useClassNames( props, 'HR' );

	const className = classnames( spacing && `is-spacing-${ spacing }` );

	const style = {
		...styleProp,
		borderTopWidth: size,
	};

	return (
		<HorizontalRuleUI { ...restProps } className={ className } style={ style } />
	);
}

HR.defaultProps = {
	size: 1,
	spacing: 'md',
	style: {},
};

const HorizontalRuleUI = styled.hr`
	border: none;
	border-top: 1px solid var(--colorLightGray600);
	height: 0;
	margin: 12px 0;

	&.is-spacing-xs {
		margin: 4px 0;
	}
	&.is-spacing-sm {
		margin: 12px 0;
	}
	&.is-spacing-md {
		margin: 20px 0;
	}
`;
