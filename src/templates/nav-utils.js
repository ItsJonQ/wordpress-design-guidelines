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
			label: 'アイデンティティ',
		},
		{
			to: '/ja/foundations/colors/',
			label: 'カラー',
		},
		{
			to: '/ja/foundations/typography/',
			label: 'タイポグラフィ',
		},
		{
			to: '/ja/foundations/iconography/',
			label: 'アイコノグラフィー',
		},
	],
};

export const getNavLinks = ( lang = 'en' ) => {
	return LINKS[ lang ] || LINKS.en;
};
