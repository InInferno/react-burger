import React, { useEffect } from 'react';
import AppHeader from '../app-header/app-header'
import BurgerContainer from '../burger-container/burger-container'
import { useDispatch } from 'react-redux';
import { ingredientsFetchData } from '../../services/actions';
import { url } from '../../utils/constants';

function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(ingredientsFetchData(`${url}/ingredients`));
  }, [dispatch])
  
  return (
    <>
      <AppHeader />
      <BurgerContainer />
    </>
  );
}

export default App;
