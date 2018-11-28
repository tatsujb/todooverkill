import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Todo} from './../models/models';

export const ADD = '[TODO] Add';
export const REMOVE = '[TODO] Remove';

export class AddTodo implements Action {
  readonly type = ADD;

  constructor(public payload: Tudo){

  }
}

export class RemoveTodo implements Action {
  readonly type = REMOVE;

  constructor(public payload: number){

  }
}

export type Actions = Add | Remove;
