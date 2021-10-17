import {
    ADD_BUN
} from '../actions/action-types';

const initialStateBun = {
    bunInConstructor: {}
}
  
export const bunReducer = (state = initialStateBun, action) => {
    switch (action.type) {
        case ADD_BUN:
            return {
                ...state,
                bunInConstructor: action.bunInConstructor
            }; 
        default: {
            return state;
        }
    }
};
