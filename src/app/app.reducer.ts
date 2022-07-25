import { createReducer, on } from '@ngrx/store';
import { initialLaureateState } from './app.state';
import * as laureateActions from './app.actions';
import { state } from '@angular/animations';

export const laureatesReducer = createReducer(
  initialLaureateState,
  on(laureateActions.LoadLaureates, (state) => ({
    ...state,
    laureates: [],
  })),
  on(laureateActions.LoadLaureatesSuccess, (state, { data }) => ({
    ...state,
    laureates: data.laureates,
  })),
  on(laureateActions.LoadLaureatesFail, (state) => ({
    ...state,
    laureates: [],
  }))
);
