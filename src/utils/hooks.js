/**
 * External dependencies
 */
import { useEffect } from 'react';
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';

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
