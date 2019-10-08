/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { Text } from '../index';
import { useClassNames } from '../../utils';

export default function Subtitle( props ) {
	const { children, ...restProps } = props;
	const [ classnames ] = useClassNames( props, 'Subtitle' );

	if ( ! children ) {
		return null;
	}

	return (
		<SubtitleUI { ...restProps } className={ classnames() }>
			<Text isMuted size={ 13 } isBlock>
				{ children }
			</Text>
		</SubtitleUI>
	);
}

const SubtitleUI = styled.div`
	margin-top: -8px;
	margin-bottom: 8px;
`;
