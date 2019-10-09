# Pages

These files, located under `src/pages`, create the web pages of the site. They take the form of `.js` files, Markdown (`.md`), and [MDX](https://mdxjs.com/) (`.mdx`).

It is recommended that pages are either `.md` or `.mdx` files. It makes working with content easier.

## Adding Pages

Anytime a new `.js`, `.md`, `.mdx` file is added under `src/pages/`, Gatsby will automatically generate the page, based on the file's content.

For example, if we added the following `happy.md` file under `src/pages/happy.md`:

```
---
title: Happy
description: Happy is happy
---

# Happy!
```

You will be able to see this page at the url:

[http://localhost:5800/happy/](http://localhost:5800/happy/)

## Working with MDX

MDX works just like regular markdown, except it understands how to use React components! This is extremely handy if you need to enhance your markdown content with an interactive React component.

This detail allows you to keep things simple, and write your content in Markdown. While being able to leverage the more complicated markup, interactions, and rendering of React, all in a single file.
