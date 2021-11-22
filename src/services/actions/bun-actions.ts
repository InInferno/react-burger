import { v4 as uuidv4 } from 'uuid';
import { ICard } from '../../utils/types';
import {
    ADD_BUN
} from './action-types';

export type IAddBunAction = {
    readonly type: typeof ADD_BUN;
    readonly bunInConstructor: ICard | null;
}

export type TBunActions = 
| IAddBunAction;

export const addBun = (res: ICard | null): IAddBunAction => ({
    type: ADD_BUN,
    bunInConstructor: res && {
        ...res,
        uuid: uuidv4()
    }
})
