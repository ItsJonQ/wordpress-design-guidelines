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
	const { spacing, ...restProps } = props;
	const [ classnames ] = useClassNames( props, 'HR' );

	const className = classnames( spacing && `is-spacing-${ spacing }` );

	return <HorizontalRuleUI { ...restProps } className={ className } />;
}

HR.defaultProps = {
	spacing: 'md',
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
