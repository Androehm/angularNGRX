import { Component, OnInit, VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LaureateService } from './app.service';
import { getAllLaureates } from './app.selector';
import { LaureateFacade } from './app.facade';
import { LaureateState } from './app.state';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  laureates$: Observable<LaureateState>;

  constructor(private readonly laureateFacade: LaureateFacade) {}

  ngOnInit() {
    this.laureateFacade.loadLaureates();

    this.laureateFacade.getlaureates$
      .pipe(
        tap((data) => console.log(data)),
        take(1)
      )
      .subscribe();
  }
}
