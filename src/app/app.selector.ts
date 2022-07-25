import { State } from '@ngrx/store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FEATURE_KEY, LaureateState } from './app.state';

export const getLaureateState = createFeatureSelector(FEATURE_KEY);

// export const getLaureatesLoaded = createSelector(get LaureateState, (state: LaureateState)=> state.laureates)
export const getAllLaureates = createSelector(
  getLaureateState,
  (state: LaureateState) => state.laureates
);
