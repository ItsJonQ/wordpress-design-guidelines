const path = require( 'path' );

exports.createPages = ( { actions } ) => {
	const { createRedirect } = actions;

	/**
	 * Redirects homepage to /foundations/ (for now)
	 */
	createRedirect( {
		fromPath: `/`,
		toPath: `/foundations/`,
		redirectInBrowser: true,
		isPermanent: true,
	} );
};

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

exports.onCreateNode = ( { node, actions } ) => {
	const { createNodeField } = actions;

	if ( node.internal.type === `Mdx` ) {
		createNodeField( {
			name: 'id',
			node,
			value: node.id,
		} );

		createNodeField( {
			name: 'title',
			node,
			value: node.frontmatter.title,
		} );

		createNodeField( {
			name: 'description',
			node,
			value: node.frontmatter.description,
		} );

		createNodeField( {
			name: 'slug',
			node,
			value: node.frontmatter.slug,
		} );

		createNodeField( {
			name: 'date',
			node,
			value: node.frontmatter.date || '',
		} );

		createNodeField( {
			name: 'keywords',
			node,
			value: node.frontmatter.keywords || [],
		} );
	}
};
