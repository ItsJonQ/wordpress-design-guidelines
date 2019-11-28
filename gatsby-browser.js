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

export const onRouteUpdate = ( props ) => {
	const { location: { hash } } = props;
	if ( hash ) {
		window.setTimeout( scrollTo( decodeURIComponent( hash ) ), 10 );
	}
};
