/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { useClassNames } from '../../utils';

export default function SiteLayoutContent( props ) {
	const { isCentered, ...restProps } = props;
	const [ classnames ] = useClassNames( props, 'SiteLayoutContent' );
	const className = classnames( isCentered && `is-centered` );

	return <ContentUI { ...restProps } className={ className } />;
}

SiteLayoutContent.defaultProps = {
	isCentered: false,
};

const ContentUI = styled.div`
	color: var(--colorText);
	flex: 1;
	padding: 40px 80px 200px;
	max-width: 860px;

	&.is-centered {
		margin: auto;
	}
`;
