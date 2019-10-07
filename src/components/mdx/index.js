/**
 * External dependencies
 */
import React from 'react';
import YouTube from 'react-youtube';

/**
 * Internal dependencies
 */
import ListItem from './list-item';
import Paragraph from './paragraph';
import H2 from './h2';
import Title from './title';

import { Link } from '../index';

export const MDXLayoutComponents = {
	h1: ( props ) => <Title { ...props } />,
	h2: ( props ) => <H2 { ...props } />,
	p: ( props ) => <Paragraph { ...props } />,
	li: ( props ) => <ListItem { ...props } />,
};

export const MDXGlobalComponents = {
	Link,
	YouTube,
};
