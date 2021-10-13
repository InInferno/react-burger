import React from 'react';
import { 
  Route, 
  useHistory
} from 'react-router-dom';
import BurgerContainer from '../burger-container/burger-container';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import Modal from '../../components/modal/modal';

export default function IngredientInfo() {

    let history = useHistory();
    const closeModal = () => {
        history.goBack();
    }

    return (
        <div>
        {history.action ==='PUSH' || history.action ==='REPLACE' ? 
            <>
                <Route path="/" children={<BurgerContainer />} />
                <Route 
                    path="/ingredients/:id" 
                    children={<Modal children={<IngredientDetails />} closeModal={closeModal} />} 
                />
            </>
            : 
            <Route 
                path="/ingredients/:id" 
                children={<IngredientDetails />} 
            />
        }
        </div>
    )
}
