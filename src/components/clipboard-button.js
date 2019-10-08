/**
 * External dependencies
 */
import React, { useState } from 'react';
import copyToClipboard from 'copy-to-clipboard';

/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { useClassNames, useClearTimeout, noop } from '../utils';

export default function ClipboardButton( props ) {
	const { text, timeout, ...restProps } = props;
	const [ isCopied, setCopied ] = useState( false );
	const [ classnames ] = useClassNames( props, 'ClipboardButton' );

	let copiedTimeout;
	useClearTimeout( copiedTimeout );

	const handleOnClick = ( event ) => {
		event.preventDefault();
		copyToClipboard( text );
		setCopied( true );

		copiedTimeout = setTimeout( () => {
			setCopied( false );
		}, timeout );
	};

	return (
		<Button { ...restProps } className={ classnames() } onClick={ handleOnClick }>
			{ isCopied ? 'Copied!' : 'Copy' }
		</Button>
	);
}

ClipboardButton.defaultProps = {
	isDefault: true,
	isSmall: true,
	onClick: noop,
	timeout: 1500,
};
