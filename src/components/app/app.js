import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ingredientsFetchData } from '../../services/actions';
import { url } from '../../utils/constants';
import AppHeader from '../app-header/app-header';
import BurgerContainer from '../../pages/burger-container/burger-container';
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import ForgorPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import Profile from '../../pages/profile/profile';

function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(ingredientsFetchData(`${url}/ingredients`));
  }, [dispatch])
  
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route path="/" exact>
          <BurgerContainer />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login /> 
        </Route>
        <Route path='/forgot-password'>
          <ForgorPassword /> 
        </Route>
        <Route path='/reset-password'>
          <ResetPassword /> 
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
      </Switch>
    </Router>  
  );
}

export default App;
