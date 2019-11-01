export const LINKS = {
	en: [
		{
			to: '/foundations/',
			label: 'Get Started',
		},
		{
			to: '/foundations/identity/',
			label: 'Identity',
		},
		{
			to: '/foundations/colors/',
			label: 'Colors',
		},
		{
			to: '/foundations/typography/',
			label: 'Typography',
		},
		{
			to: '/foundations/iconography/',
			label: 'Iconography',
		},
	],
	ja: [
		{
			to: '/ja/foundations/',
			label: 'はじめに',
		},
		{
			to: '/ja/foundations/identity/',
			label: 'Identity',
		},
		{
			to: '/ja/foundations/colors/',
			label: '色',
		},
		{
			to: '/ja/foundations/typography/',
			label: '活字',
		},
		{
			to: '/ja/foundations/iconography/',
			label: '図像学',
		},
	],
};

export const getNavLinks = ( lang = 'en' ) => {
	return LINKS[ lang ] || LINKS.en;
};
