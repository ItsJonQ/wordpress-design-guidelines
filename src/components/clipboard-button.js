/**
 * External dependencies
 */
import React, { useState } from 'react';

/**
 * WordPress dependencies
 */
import { ClipboardButton as WPClipBoardButton } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { useClassNames, noop } from '../utils';

export default function ClipboardButton( props ) {
	const [ isCopied, setIsCopied ] = useState( false );
	const [ classnames ] = useClassNames( props, 'ClipboardButton' );
	const { onCopy, onFinishCopy } = props;

	const handleOnCopy = () => {
		setIsCopied( true );
		onCopy();
	};

	const handleOnFinishedCopy = () => {
		setIsCopied( false );
		onFinishCopy();
	};

	return (
		<WPClipBoardButton
			{ ...props }
			className={ classnames() }
			onCopy={ handleOnCopy }
			onFinishCopy={ handleOnFinishedCopy }
		>
			{ isCopied ? 'Copied!' : 'Copy' }
		</WPClipBoardButton>
	);
}

ClipboardButton.defaultProps = {
	isDefault: true,
	isSmall: true,
	onCopy: noop,
	onFinishCopy: noop,
};
