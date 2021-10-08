import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ingredientsFetchData } from '../../services/actions';
import { url } from '../../utils/constants';
import RegisterPage from '../../pages/register-page'
import LoginPage from '../../pages/login-page';
import MainPage from '../../pages/main-page';
import ForgotPasswordPage from '../../pages/forgot-password-page';

function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(ingredientsFetchData(`${url}/ingredients`));
  }, [dispatch])
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path='/register'>
          <RegisterPage />
        </Route>
        <Route path='/login'>
         <LoginPage /> 
        </Route>
        <Route path='/forgot-password'>
         <ForgotPasswordPage /> 
        </Route>
      </Switch>
    </Router>  
  );
}

export default App;
