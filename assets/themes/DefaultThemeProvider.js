import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import React from 'react';

const theme = createMuiTheme({
    palette: {
        primary: deepOrange
    }
})

const DefaultThemeProvider = ({children}) => {
    return (<>
        <MuiThemeProvider theme={theme}>{ children }</MuiThemeProvider>
    </>)
}

export default DefaultThemeProvider;