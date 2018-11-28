import {Action} from '@ngrx/store';
import {Todo} from './../models/models';
import * as Actions from './../actions/actions';

const initialState: Todo = {
  title: 'My Title',
  body: 'hello wolrd'
}

export function reducer(state: Todo[] = [initialState], action: Actions.Actions){
  switch(action.type){
    case Actions.ADD:
      return [...state, actions.payload];
    default:
      return state;
  }
}
