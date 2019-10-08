/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { Dashicon } from '../index';
import { useClassNames } from '../../utils';

export default function Preview( props ) {
	const { icon, ...restProps } = props;
	const [ classnames ] = useClassNames( 'IconInfoPreview', props );

	return (
		<PreviewUI { ...restProps } className={ classnames() }>
			<Dashicon icon={ icon } />
		</PreviewUI>
	);
}

Preview.defaultProps = {
	icon: 'admin-appearance',
};

const PreviewUI = styled.div`
	align-items: center;
	border-radius: 8px;
	box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
	color: currentColor;
	display: flex;
	font-weight: bold;
	height: 40px;
	justify-content: center;
	width: 40px;
`;
