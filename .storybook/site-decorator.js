import React from 'react';
import { ThemeProvider } from 'styled-components';

import { AppProvider, GlobalStyles } from '../src/components';

export default function SiteDecorator(storyFn) {
	return (
		<AppProvider>
			<ThemeProvider theme={{}}>
				<>
					<GlobalStyles />
					{storyFn()}
				</>
			</ThemeProvider>
		</AppProvider>
	);
}
