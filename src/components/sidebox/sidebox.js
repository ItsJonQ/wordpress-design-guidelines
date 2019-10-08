/**
 * External dependencies
 */
import React, { useState, useEffect } from 'react';

/**
 * Internal dependencies
 */
import { Card, Positioner, Subtitle, Title } from './index';
import { useSpring, animated } from '../spring';
import { useClassNames } from '../../utils';

Sidebox.Title = Title;
Sidebox.Subtitle = Subtitle;

export default function Sidebox( props ) {
	const [ classnames ] = useClassNames( 'Sidebox', props );
	const { children, isOpen: isOpenProp, ...restProps } = props;
	const [ isOpen, setIsOpen ] = useState( isOpenProp );

	useEffect( () => {
		if ( isOpenProp !== isOpen ) {
			setIsOpen( isOpenProp );
		}
	}, [ isOpen, isOpenProp, setIsOpen ] );

	const styles = useSpring( {
		config: {
			duration: 160,
		},
		opacity: isOpen ? 1 : 0,
		transform: isOpen ? `translateY(0px)` : `translateY(20px)`,
	} );

	const className = classnames( isOpen && `is-open` );

	return (
		<Positioner>
			<animated.div { ...restProps } className={ className } style={ styles }>
				<Card>{ children }</Card>
			</animated.div>
		</Positioner>
	);
}
