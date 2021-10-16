import { v4 as uuidv4 } from 'uuid';
import {
    ADD_BUN
} from './action-types';

export function addBun(res) {
    return {
        type: ADD_BUN,
        bunInConstructor: {
            ...res,
            uuid: uuidv4()
        }
    }
}
