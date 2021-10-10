import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ingredientsFetchData, userFetch } from '../../services/actions';
import { url } from '../../utils/constants';
import AppHeader from '../app-header/app-header';
import BurgerContainer from '../../pages/burger-container/burger-container';
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import ForgorPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import Profile from '../../pages/profile/profile';
import ProtectedRoute from '../protected-route/protected-route';
import { getCookie } from '../../utils/cookie';
// import Ingredient from '../../pages/ingredient/ingredient';
import IngredientDetails from '../ingredient-details/ingredient-details';

function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(ingredientsFetchData(`${url}/ingredients`));
    if(getCookie('accessToken')) {
      dispatch(userFetch(url))
    }
  }, [dispatch])
  
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route path="/" exact>
          <BurgerContainer />
        </Route>
        {/* <Route path="/ingredients/:id">
          <Ingredient />
        </Route> */}
        <Route path='/ingredients/:id'>
          <IngredientDetails />
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
        <ProtectedRoute path="/">
          <Route path='/profile'>
            <Profile />
          </Route>
        </ProtectedRoute>
      </Switch>
    </Router>  
  );
}

export default App;
