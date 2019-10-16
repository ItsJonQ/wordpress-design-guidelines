/**
 * External dependencies
 */
import React, { useState, useContext, createContext } from 'react';
import { get } from 'lodash';

export const AppContext = createContext( {} );
export const useAppContext = () => useContext( AppContext );

export function AppProvider( props ) {
	const { children, location, navigate } = props;
	const [ currentColor, setCurrentColor ] = useState();
	const [ currentIcon, setCurrentIcon ] = useState();

	const lang = get( props, 'pageContext.lang', 'en' );

	const { Provider } = AppContext;

	const providerProps = {
		currentColor,
		currentIcon,
		lang,
		location,
		navigate,
		setCurrentColor,
		setCurrentIcon,
	};

	return (
		<Provider value={ providerProps }>
			<>{ children }</>
		</Provider>
	);
}
