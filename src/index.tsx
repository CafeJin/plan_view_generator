import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import store from './app/store';
import {Provider} from "react-redux";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
    <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>,
);