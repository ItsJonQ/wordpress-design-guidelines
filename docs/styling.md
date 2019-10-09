# Styling (CSS)

## Styled Components (CSS-in-JS)

This project uses [`styled-components`](https://www.styled-components.com/) to render the styles (CSS) alongside the React components.

An example of a styled component looks something like this:

```jsx
const BreakUI = styled.div`
	height: 0;
	margin: 20px 0;
	overflow: hidden;
`;
```

Admittedly, if you aren't use to styled components, the syntax is a little bit funky. The trade off is worth is as the library and approach offers tremendous benefits (from a React/component perspective).

After the initial `styled.div` bit, all the code that is contained within the backticks (\`) can be written just like regular CSS. It's actually a little bit more like [Sass](https://github.com/sass/node-sass), as it supports features like nesting with `&`.

If you're not comfortable creating or modifying styled components, don't worry! We have an alternative approach.

## Regular CSS

In the project `src/` directory, there is a `styles/` directory that contains several `.css` files.

If you're contributing new styles, feel free to write whatever you need in the `/src/styles/custom.css` file. During development, any CSS changes here will automatically hot reload into the browser (live).

Think of it like a Codepen!

Don't worry too much about the perfect CSS architecture approach. In fact, don't worry at all!

Write whatever you need to get the styles just right. During the pull request/review process, someone will convert your styles into `styled-components` for you.
