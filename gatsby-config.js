module.exports = {
	pathPrefix: '/',
	siteMetadata: {
		siteUrl: 'https://wp-design-guidelines.netlify.com/',
		author: 'Jon Quach',
		title: 'WordPress Design Guidelines',
		description:
			'A collection of guidelines, resources, and tools for designing WordPress.',
		keywords: [
			'WordPress',
			'design',
			'guidelines',
			'system',
			'color',
			'typography',
		],
	},
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${ __dirname }/content`,
				name: 'content',
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [ '.mdx', '.md' ],
				gatsbyRemarkPlugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 1035,
							sizeByPixelDensity: true,
						},
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: 'language-',
							inlineCodeMarker: null,
							aliases: {},
						},
					},
					`gatsby-remark-autolink-headers`,
				],
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-catch-links',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-remove-serviceworker',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'WordPress Design Guidelines',
				short_name: 'WP Design Guidelines',
				start_url: '/',
				background_color: '#fff',
				theme_color: '#333',
				display: 'standalone',
				icon: 'assets/logo.png',
			},
		},
	],
};
