/**
 * External dependencies
 */
import styled from 'styled-components';

export default styled.h2`
	color: black;
	text-align: left;
	font-size: 2.2rem;
	padding: 8px 0;
	margin: 8px 0;
	font-weight: 500;
	line-height: 1.1;

	* + & {
		margin-top: 32px;
	}
`;
