import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './Theme'
import { Div } from 'styled-system-html'


export default (props) => (
	<ThemeProvider theme={theme}>
    	{props.children}
	</ThemeProvider>
)

