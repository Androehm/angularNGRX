import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LaureateEffects } from './app.effects';
import { LaureateFacade } from './app.facade';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FEATURE_KEY } from './app.state';
import { laureatesReducer } from './app.reducer';
import { LaureateService } from './app.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([LaureateEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 5 }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [LaureateService, LaureateFacade],
})
export class AppModule {}
