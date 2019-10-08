/**
 * External dependencies
 */
import React from 'react';
import { startCase } from 'lodash';

/**
 * Internal dependencies
 */
import { Box, CopyCode, Flexy, Text } from '../index';
import { Preview } from './index';
import { Title } from '../sidebox';
import { useClassNames } from '../../utils';

export default function Card( props ) {
	const [ classnames ] = useClassNames( 'IconInfoCard', props );
	const { icon } = props;

	const title = startCase( icon );
	const dashIconName = `dashicons-${ icon }`;

	const html = `<span class="dashicons ${ dashIconName }"></span>`;

	return (
		<Box className={ classnames() }>
			<Title>{ title }</Title>
			<Flexy>
				<Flexy.Item>
					<Box mr={ 2 }>
						<Preview icon={ icon } />
					</Box>
				</Flexy.Item>
				<Flexy.Block>
					<Text size={ 13 } isBlock>
						{ dashIconName }
					</Text>
				</Flexy.Block>
			</Flexy>
			<Box mt={ 3 }>
				<CopyCode label="HTML" value={ html } style={ { height: 96 } } />
			</Box>
		</Box>
	);
}

Card.defaultProps = {
	icon: 'admin-appearance',
};
