import { v4 as uuidv4 } from 'uuid';
import { ICard } from '../../utils/types';
import {
    ADD_BUN
} from './action-types';

export function addBun(res: ICard | {}) {
    return {
        type: ADD_BUN,
        bunInConstructor: {
            ...res,
            uuid: uuidv4()
        }
    }
}
