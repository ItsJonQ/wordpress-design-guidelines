# Storybook

This project uses [Storybook](https://storybook.js.org/) to design, develop, and test out various UI components.

## Launching Storybook

The Storybook development environment runs on a separate URL compared to the website. To fire up Storybook, open up your Terminal app and run the following command:

```
yarn storybook
```

If you're using npm, run:

```
npm run storybook
```

Once Storybook builds, it will open up the environment in your default browser.

The URL will look something like this:

[http://localhost:5801/](http://localhost:5801/)

## Working with Storybook

Several of the React components in the project have stories. You'll find them under a `__stories__` directory right next to the component.

```
src/
	\ components/
		\ copy-code/
			| __stories__/
			|	\ copy-code.stories.js
			| copy-code.js
			\ index.js
```

To create a story, add a `__stories__` directory within the component's directory (if one doesn't already exist).

Create a file that has a the same name as your component, but with a suffix of `.stories.js`.

Within that `my-component.stories.js` file, add the following:

```jsx
/**
 * External dependencies
 */
import React from 'react';
import { storiesOf } from '@storybook/react';

/**
 * Internal dependencies
 */
import { MyComponent } from '../index';

const stories = storiesOf('MyComponent/MyComponent', module);

stories.add('Default', () => {
	return <MyComponent />;
});
```

Replace `MyComponent` with the name of your actual component.
