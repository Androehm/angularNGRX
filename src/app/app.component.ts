import { Component, OnInit, VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { LaureateFacade } from './app.facade';
import { LaureateService } from './app.service';
import * as laureatesAction from './app.actions';
import { Observable } from 'rxjs';
import { Laureates } from './app.state';
import { getAllLaureates } from './app.selector';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  laureates$: Observable<Laureates[]>;

  constructor(
    private readonly laureateFacade: LaureateFacade,
    private service: LaureateService,
    private store: Store
  ) {
    this.laureates$ = store.select(getAllLaureates);
  }

  ngOnInit() {
    this.laureateFacade.loadLaureates();
    console.log(this.laureates$);
  }
}
