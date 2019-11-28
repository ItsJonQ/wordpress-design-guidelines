/**
 * External dependencies
 */
import { useEffect } from 'react';
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';
import classnamesUtil from 'classnames';
import copyToClipboard from 'copy-to-clipboard';

export function useAnchorLinks() {
	useEffect( () => {
		const anchorNodes = document.querySelectorAll( 'a.anchor' );
		const linkNodes = document.querySelectorAll( 'a:not(.anchor)' );

		const handleOnClickLink = ( event ) => {
			const { currentTarget: target } = event;
			const href = decodeURIComponent( target.getAttribute( 'href' ) );

			if ( href.indexOf( '#' ) !== 0 ) {
				return;
			}

			const targetHref = decodeURIComponent( target.href );

			window.history.pushState( {}, null, targetHref );
			event.preventDefault();

			const targetNode = document.querySelector( href );
			if ( ! targetNode ) {
				return;
			}
			targetNode.scrollIntoView( {
				behavior: 'smooth',
			} );
		};

		const handleOnClickAnchor = ( event ) => {
			const { currentTarget: target } = event;
			const targetHref = decodeURIComponent( target.href );
			event.preventDefault();
			window.history.pushState( {}, null, targetHref );
			copyToClipboard( decodeURIComponent( targetHref ) );
		};

		Array.from( linkNodes ).forEach( ( node ) => {
			node.addEventListener( 'click', handleOnClickLink );
		} );

		Array.from( anchorNodes ).forEach( ( node ) => {
			node.addEventListener( 'click', handleOnClickAnchor );
		} );

		return () => {
			Array.from( linkNodes ).forEach( ( node ) => {
				node.removeEventListener( 'click', handleOnClickLink );
			} );
			Array.from( anchorNodes ).forEach( ( node ) => {
				node.removeEventListener( 'click', handleOnClickAnchor );
			} );
		};
	}, [] );
}

export function useClassNames( props, initialClassName = '' ) {
	const { className: classNameProp } = props;
	const baseClassNames = classnamesUtil( classNameProp, initialClassName );
	const classnames = ( ...args ) => {
		return classnamesUtil( baseClassNames, classnamesUtil( ...args ) );
	};

	return [ classnames ];
}

export function useClearSelection() {
	useEffect( () => {
		const sel = window.getSelection ?
			window.getSelection() :
			document.selection;
		if ( sel ) {
			if ( sel.removeAllRanges ) {
				sel.removeAllRanges();
			} else if ( sel.empty ) {
				sel.empty();
			}
		}
	}, [] );
}

export function useClearTimeout( timeout ) {
	useEffect( () => {
		return () => {
			window.clearTimeout( timeout );
		};
	}, [ timeout ] );
}

export function useFocusRef( ref, shouldFocus = true ) {
	useEffect( () => {
		const node = ref ? ref.current : null;

		if ( ! node ) {
			return;
		}
		window.requestAnimationFrame( () => {
			if ( node && shouldFocus ) {
				node.focus();
			}
		} );
	}, [ ref, shouldFocus ] );
}

export function useFocusNodeById( id ) {
	useEffect( () => {
		if ( ! id ) {
			return;
		}
		window.requestAnimationFrame( () => {
			const node = document.getElementById( id );
			if ( node ) {
				node.focus();
			}
		} );
	}, [ id ] );
}

export function useScrollToTop( prop ) {
	useClearSelection();
	useEffect( () => {
		window.scrollTo( 0, 0 );
	}, [ prop ] );
}

export function useScrollRefIntoView( ref, shouldScroll = true ) {
	useEffect( () => {
		const options = {
			behavior: 'smooth',
			scrollMode: 'if-needed',
		};

		const node = ref ? ref.current : null;

		window.requestAnimationFrame( () => {
			if ( node && shouldScroll ) {
				scrollIntoViewIfNeeded( node, options );
			}
		} );
	}, [ ref, shouldScroll ] );
}

export function useScrollIntoView( selector ) {
	useEffect( () => {
		const options = {
			behavior: 'smooth',
			scrollMode: 'if-needed',
		};

		let node = selector;
		if ( typeof selector === 'string' ) {
			node = document.querySelector( selector );
		}

		window.requestAnimationFrame( () => {
			if ( node ) {
				scrollIntoViewIfNeeded( node, options );
			}
		} );
	}, [ selector ] );
}
