/**
 * External dependencies
 */
import { createGlobalStyle } from 'styled-components';

/**
 * Internal dependencies
 */
import { generateCSSColorVariables } from '../utils';

const GlobalStyles = createGlobalStyle`
	:root {
		${ generateCSSColorVariables };
	}
`;

export default GlobalStyles;
