import { ICard } from '../../utils/types';
import {
    ADD_BUN
} from '../actions/action-types';
import { TApplicationActions } from '../../utils/types';

interface TBunState {
    bunInConstructor: ICard | null;
} 

const initialStateBun: TBunState = {
    bunInConstructor: null
}

export const bunReducer = (state = initialStateBun, action: TApplicationActions): TBunState => {
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
