/**
 * External dependencies
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { ClipboardButton, Text, Textarea } from '../index';
import { useClassNames } from '../../utils';

export default function CopyCode( props ) {
	const [ classnames ] = useClassNames( props, 'CopyCode' );
	const { label, value, ...restProps } = props;

	return (
		<CopyCodeUI { ...props } className={ classnames() }>
			<Textarea { ...restProps } value={ value } />
			<TopBarUI>
				<LabelUI>
					<Text size={ 12 } isBlock shade="muted">
						{ label }
					</Text>
				</LabelUI>
				<ClipboardButton text={ value } />
			</TopBarUI>
		</CopyCodeUI>
	);
}

CopyCode.defaultProps = {
	readOnly: true,
};

const CopyCodeUI = styled.div`
	position: relative;

	textarea {
		font-family: var(--fontFamilyMono);
		font-size: 1.2rem;
		padding-top: 38px;
	}
`;

const TopBarUI = styled.div`
	align-items: center;
	background: var(--colorLightGray100);
	border-bottom: 1px solid var(--colorLightGray800);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	display: flex;
	height: 30px;
	justify-content: space-between;
	left: 1px;
	padding: 2px 4px;
	position: absolute;
	right: 1px;
	top: 1px;
	z-index: 1;
`;

const LabelUI = styled.div`
	padding: 0 0 0 4px;
`;
