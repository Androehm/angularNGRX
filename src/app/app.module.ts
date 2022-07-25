import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { FEATURE_KEY } from './app.state';
import { laureatesReducer } from './app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LaureateFacade } from './app.facade';
import { LaureateEffects } from './app.effects';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 5 }),
    StoreModule.forRoot({}),
    StoreModule.forFeature(FEATURE_KEY, laureatesReducer),
    EffectsModule.forFeature([LaureateEffects]),
    MatCardModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [LaureateFacade],
})
export class AppModule {}
