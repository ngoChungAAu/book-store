/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import DefaultTheme from 'theme/defaultTheme';

import { useTranslation } from 'react-i18next';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { HomePage } from './pages/HomePage/Loadable';
import { UserProfilePage } from 'app/pages/UserProfilePage/Loadable';
import { RegisterPage } from 'app/pages/RegisterPage/Loadable';
import { LoginPage } from './pages/LoginPage/Loadable';
import { ListPage } from './pages/ListPage/Loadable';
import { DetailPage } from './pages/DetailPage/Loadable';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s"
        htmlAttributes={{ lang: i18n.language }}
      ></Helmet>

      <ThemeProvider theme={DefaultTheme}>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/profile" component={UserProfilePage} />
          <Route exact path="/list" component={ListPage} />
          <Route exact path="/detail" component={DetailPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
