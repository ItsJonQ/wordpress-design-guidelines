/**
 * External dependencies
 */
import React, { useContext, createContext } from 'react';

export const AppContext = createContext( {} );
export const useAppContext = () => useContext( AppContext );

export function AppProvider( props ) {
	const { children, location, navigate } = props;
	const { Provider } = AppContext;

	const providerProps = {
		location,
		navigate,
	};

	return (
		<Provider value={ providerProps }>
			<>{ children }</>
		</Provider>
	);
}
