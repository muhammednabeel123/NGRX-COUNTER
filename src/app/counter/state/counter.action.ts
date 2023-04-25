//this is action page

import { createAction, props } from "@ngrx/store";

export const increment = createAction('increment') //should be unique name

export const decrement = createAction('decrement')
export const reset = createAction('reset')
export const customIncrement =  createAction('customincrement',
props<{value:number}>()); 