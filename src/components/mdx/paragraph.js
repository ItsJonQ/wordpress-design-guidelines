/**
 * External dependencies
 */
import styled from 'styled-components';

export default styled.p`
	text-align: left;
	font-size: 1.6rem;
	line-height: 1.6;
	color: var(--colorText);

	h1 + & {
		font-size: 2.2rem;
		line-height: 1.3;
	}
`;
