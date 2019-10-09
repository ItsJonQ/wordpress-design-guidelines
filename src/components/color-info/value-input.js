/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { Box, Input, Text } from '../index';
import { useClassNames } from '../../utils';

export default function ValueInput( props ) {
	const [ classnames ] = useClassNames( 'ColorInfoValueInput', props );
	const { label, value, style: styleProp, width, ...restProps } = props;

	const style = {
		...styleProp,
		width,
	};

	return (
		<Box className={ classnames() } style={ style }>
			<InputWrapperUI>
				<Input { ...restProps } value={ value } size="sm" readOnly />
			</InputWrapperUI>
			<Text shade="muted" size={ 10 } isUppercase isBlock align={ 'center' }>
				{ label }
			</Text>
		</Box>
	);
}

const InputWrapperUI = styled.div`
	margin-bottom: 2px;
`;
