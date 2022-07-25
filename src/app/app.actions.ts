import { createAction, props } from '@ngrx/store';

export enum LaureateActionNames {
  Init = '[Laureates Page] Init',
  LoadLaureates = '[Laureates Api] Load Laureates Api',
  LoadLaureatesSuccess = '[Laureates Api] Load Laureates Api Success',
  LoadLaureateFail = '[Laureates Api] Load Laureates Api Failed',
}

export const Init = createAction(LaureateActionNames.Init);

export const LoadLaureates = createAction(LaureateActionNames.LoadLaureates);

export const LoadLaureatesSuccess = createAction(
  LaureateActionNames.LoadLaureatesSuccess,
  props<{ data: any }>()
  // props<{ data: Laureates[]}>()
);

export const LoadLaureatesFail = createAction(
  LaureateActionNames.LoadLaureateFail,
  props<{ error: string | null }>()
);
