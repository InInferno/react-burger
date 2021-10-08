import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import AppHeader from '../app-header/app-header'
// import BurgerContainer from '../burger-container/burger-container'
import { useDispatch } from 'react-redux';
import { ingredientsFetchData } from '../../services/actions';
import { url } from '../../utils/constants';
import RegisterPage from '../../pages/register-page'
import LoginPage from '../../pages/login-page';

function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(ingredientsFetchData(`${url}/ingredients`));
  }, [dispatch])
  
  return (
    <Router>
      <Switch>
        {/* <AppHeader /> */}
        {/* <BurgerContainer /> */}
        <Route path='/register'>
          <RegisterPage />
        </Route>
        <Route path='/login'>
         <LoginPage /> 
        </Route>
      </Switch>
    </Router>  
  );
}

export default App;
