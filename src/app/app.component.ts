import { Component, OnInit, VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LaureateService } from './app.service';
import { getAllLaureates } from './app.selector';
import { LaureateFacade } from './app.facade';
import { Laureates } from './app.state';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  laureates$: Observable<Laureates[]>;

  constructor(private readonly laureateFacade: LaureateFacade) {}

  ngOnInit() {
    this.laureateFacade.loadLaureates();
    console.log(this.laureates$);
  }
}
