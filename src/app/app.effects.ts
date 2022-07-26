import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, concatMap, map, Observable, of, switchMap } from 'rxjs';
import { LaureateActionNames } from './app.actions';
import { LaureateService } from './app.service';
import { Laureates } from './app.state';
import * as laureateActions from './app.actions';

@Injectable({
  providedIn: 'root',
})
export class LaureateEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly service: LaureateService
  ) {}
  public readonly loadLaureates$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(LaureateActionNames.LoadLaureates),
      concatMap(() =>
        this.service
          .getLaureates()
          .pipe(map((data) => laureateActions.LoadLaureatesSuccess({ data })))
      ),
      catchError((error: string | null) =>
        of(laureateActions.LoadLaureatesFail({ error }))
      )
    );
  });
}
