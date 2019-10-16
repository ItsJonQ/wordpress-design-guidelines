# Content

These files, located under `content/`, create the web pages of the site. They take the form of Markdown (`.md`), and [MDX](https://mdxjs.com/) (`.mdx`).

## Adding Pages

Anytime a `.mdx` or `.md` file is added under `content/`, Gatsby will automatically generate the page, based on the file's content.

For example, if we added the following `happy.md` file under `/content/en/happy.md`:

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

## Internationalization

That will contain various sub-directories that reflect the language.

Example:

```
content/
	en/
	fr/
	ja/
	kr/
```

The URLs that generate for these files will be based on their file path.

For example, the following file:

```
/content/ja/foundations/index.mdx
```

Will be generated at the url of:

```
/ja/foundations/
```

### Default Language

The default language is `/en/`. The URLs that generate for files under the `/en/` directory will not start with `/en`.

For example. the following file:

```
/content/en/foundations/index.mdx
```

Will be generated at the url of:

```
/foundations/
```
