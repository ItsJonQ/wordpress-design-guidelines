/**
 * External dependencies
 */
import React, { useState, useContext, createContext } from 'react';

export const AppContext = createContext( {} );
export const useAppContext = () => useContext( AppContext );

export function AppProvider( props ) {
	const { children, location, navigate } = props;
	const [ currentColor, setCurrentColor ] = useState();
	const [ currentIcon, setCurrentIcon ] = useState();

	const { Provider } = AppContext;

	const providerProps = {
		currentColor,
		currentIcon,
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
