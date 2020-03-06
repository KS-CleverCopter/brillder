import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import './app.css';
import '../../assets/fonts/icomoon/style.css';

import Pallet from '../play/pallet/Pallet';
import Dashboard from '../manage/dashboard/Dashboard';
import PlayBrickRouting from '../play/brick/PlayBrickRouting';
import NewBrick from '../build/newBrick/newBrick';
import MainPage from '../build/mainPage/mainPage';
import BricksListPage from '../build/bricksListPage/bricksListPage';
import InvestigationBuildPage from '../build/investigationBuildPage/investigationBuildPage'
import LoginPage from '../loginPage/loginPage';
import RegisterPage from '../registerPage/registerPage';
import ChooseLoginPage from '../chooseLoginPage/ChooseLoginPage';
import ChooseUserPage from '../chooseUserPage/ChooseUserPage';
import LogoPage from '../logoPage/logoPage';

import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';

const App: React.FC = (props: any) => {
  let history = useHistory();

  axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    history.push("/choose-user");
    return Promise.reject(error);
  });

  const theme = React.useMemo(() =>
    createMuiTheme({
      palette: {
        primary: { main: "#0B3A7E" }
      }
    }),
    [],
  );

  axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <PrivateRoute path="/play/brick/:brickId" component={PlayBrickRouting} />
        <PrivateRoute path="/play/pallet/:palletName" component={Pallet} />
        <PrivateRoute path="/manage/dashboard" component={Dashboard} />

        <PrivateRoute path="/build/new-brick" component={NewBrick} />
        <PrivateRoute path="/build/brick/:brickId" component={InvestigationBuildPage} />
        <PrivateRoute path="/build/bricks-list" component={BricksListPage} />

        <AuthRoute path="/choose-login" component={ChooseLoginPage} />
        <AuthRoute path="/choose-user" component={ChooseUserPage} />
        <AuthRoute path="/login" exact component={LoginPage} />
        <AuthRoute path="/register" exact component={RegisterPage} />

        <PrivateRoute path="/build" component={MainPage} />
        <Route path="/logo-page" component={LogoPage} />
        <PrivateRoute path="/" component={MainPage} />
      </Switch>
    </ThemeProvider>
  );
}

export default App