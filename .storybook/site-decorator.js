import React from 'react';
import GlobalStyles from '../src/components/global-styles';

export default function SiteDecorator(storyFn) {
	return (
		<>
			<GlobalStyles />
			{storyFn()}
		</>
	);
}
