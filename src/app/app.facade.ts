import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LaureateState } from './app.state';
import * as laureateSelectors from './app.selector';
import * as laureateActions from './app.actions';

@Injectable()
export class LaureateFacade {
  public readonly getlaureates$: Observable<LaureateState> = this.store.pipe(
    select(laureateSelectors.getAllLaureates)
  );

  constructor(private readonly store: Store<LaureateState>) {}

  public init(): void {
    this.store.dispatch(laureateActions.Init());
  }

  public loadLaureates(): void {
    this.store.dispatch(laureateActions.LoadLaureates());
  }
}
