/**
 * Internal dependencies
 */
import './src/styles/index';

const scrollTo = ( id ) => () => {
	const el = document.querySelector( id );
	if ( el ) {
		return window.scrollTo( 0, el.offsetTop - 20 );
	}
	return false;
};

export const onRouteUpdate = ( { location: { hash } } ) => {
	if ( hash ) {
		window.setTimeout( scrollTo( hash ), 10 );
	}
};
