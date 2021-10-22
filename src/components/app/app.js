import React, { useEffect } from 'react';
import {
  Route, 
  Switch,
  useLocation,
  useHistory
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userFetch } from '../../services/actions/profile-actions';
import { ingredientsFetchData } from '../../services/actions/ingredients-actions';
import AppHeader from '../app-header/app-header';
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import ForgorPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import Profile from '../../pages/profile/profile';
import ProtectedRoute from '../protected-route/protected-route';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import BurgerContainer from '../../pages/burger-container/burger-container';
import Feed from '../../pages/feed/feed';
import Orders from '../../pages/orders/orders';
import OrderDetails from '../order-details/order-details';

function App() {

  const dispatch = useDispatch()
  let location = useLocation();
  let history = useHistory();
  const action = history.action ==='PUSH' || history.action ==='REPLACE';
  const modalIngredientOpen = action && location.state && location.state.ingredientModal;
  
  useEffect(() => {
    dispatch(ingredientsFetchData());
    dispatch(userFetch());
  }, [dispatch])

  const closeModal = () => {
    history.goBack();
  }

  return (
    <>
      <AppHeader />
      <Switch location={modalIngredientOpen || location}>
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
        <ProtectedRoute path="/profile" exact>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path="/profile/orders" exact>
          <Orders />
        </ProtectedRoute>
        <ProtectedRoute path="/profile/orders/:id" exact>
          <OrderDetails />
        </ProtectedRoute>
        <ProtectedRoute path="/feed" exact>
          <Feed /> 
        </ProtectedRoute>
        <ProtectedRoute path="/feed/:id" exact>
          <OrderDetails /> 
        </ProtectedRoute>
        <Route 
          path="/ingredients/:id" 
          children={<IngredientDetails />} 
        />
      </Switch>
      {modalIngredientOpen && 
        <Route path="/ingredients/:id">
          <Modal closeModal={closeModal}>
            <IngredientDetails />
          </Modal>
        </Route>
      }
    </>
  );
}

export default App;
