const path = require( 'path' );
const { createFilePath } = require( 'gatsby-source-filesystem' );
const { get } = require( 'lodash' );

const DEFAULT_TEMPLATE_NAME = 'content';
const DEFAULT_LANG = 'en';

const LANGS = [ 'en', 'ja' ];

const createPosts = ( createPage, edges ) => {
	edges.forEach( ( { node }, index ) => {
		const templateName = get(
			node,
			'fields.template',
			DEFAULT_TEMPLATE_NAME,
		);
		const templateFile = `src/templates/${ templateName }.js`;

		createPage( {
			path: node.fields.slug,
			component: path.resolve( templateFile ),
			context: {
				...node.fields,
				id: node.id,
				index,
			},
		} );
	} );
};

const createSlug = ( { node, filePath } ) => {
	const preferredSlug = get( node, 'frontmatter.slug', filePath );
	const isDefaultLang = preferredSlug.indexOf( `/${ DEFAULT_LANG }/` ) === 0;

	if ( ! isDefaultLang ) {
		return preferredSlug;
	}

	return preferredSlug.replace( /^\/en\//, '' );
};

const getLang = ( { filePath } ) => {
	const matches = filePath.match( /^\/(.*?)\// );
	if ( ! matches.length ) {
		return DEFAULT_LANG;
	}

	return matches[ 1 ];
};

const createLangRedirects = ( { createRedirect } ) => {
	LANGS.forEach( ( lang ) => {
		const isLangEn = lang === 'en';
		const baseUrl = isLangEn ? '/' : `/${ lang }/`;

		createRedirect( {
			fromPath: baseUrl,
			toPath: `${ baseUrl }foundations/`,
			redirectInBrowser: true,
			isPermanent: true,
		} );

		if ( ! isLangEn ) {
			createRedirect( {
				fromPath: `/${ lang }`,
				toPath: `${ baseUrl }foundations/`,
				redirectInBrowser: true,
				isPermanent: true,
			} );
		}
	} );
};

exports.createPages = ( { actions, graphql } ) =>
	graphql( `
		query {
			allMdx {
				edges {
					node {
						id
						excerpt(pruneLength: 250)
						fields {
							title
							description
							slug
							template
							lang
						}
						body
					}
				}
			}
		}
	` ).then( ( { data, errors } ) => {
		if ( errors ) {
			return Promise.reject( errors );
		}

		const { createRedirect } = actions;

		/**
		 * Redirects homepage to /foundations/ (for now)
		 */
		createLangRedirects( { createRedirect } );

		const { edges } = data.allMdx;

		createPosts( actions.createPage, edges );
	} );

exports.onCreateWebpackConfig = ( { getConfig, actions, stage } ) => {
	actions.setWebpackConfig( {
		resolve: {
			modules: [ path.resolve( __dirname, 'src' ), 'node_modules' ],
			alias: {
				$components: path.resolve( __dirname, 'src/components' ),
			},
		},
	} );

	// react-🔥-dom fix
	// https://github.com/gatsbyjs/gatsby/issues/11934#issuecomment-469046186
	const config = getConfig();
	if ( stage.startsWith( 'develop' ) && config.resolve ) {
		config.resolve.alias = {
			...config.resolve.alias,
			'react-dom': '@hot-loader/react-dom',
		};
	}
};

exports.onCreateNode = ( { node, actions, getNode } ) => {
	const { createNodeField } = actions;

	if ( node.internal.type === `Mdx` ) {
		const filePath = createFilePath( { node, getNode } );
		const slug = createSlug( { node, filePath } );
		const lang = getLang( { filePath } );

		createNodeField( {
			name: 'id',
			node,
			value: node.id,
		} );

		createNodeField( {
			name: 'title',
			node,
			value: get( node, 'frontmatter.title', '' ),
		} );

		createNodeField( {
			name: 'description',
			node,
			value: get( node, 'frontmatter.description', '' ),
		} );

		createNodeField( {
			name: 'slug',
			node,
			value: slug,
		} );

		createNodeField( {
			name: 'date',
			node,
			value: get( node, 'frontmatter.date', '' ),
		} );

		createNodeField( {
			name: 'keywords',
			node,
			value: get( node, 'frontmatter.keywords', [] ),
		} );

		createNodeField( {
			name: 'template',
			node,
			value: get( node, 'frontmatter.template', DEFAULT_TEMPLATE_NAME ),
		} );

		createNodeField( {
			name: 'lang',
			node,
			value: get( node, 'frontmatter.lang', lang ),
		} );
	}
};
