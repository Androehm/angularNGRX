import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { FEATURE_KEY } from './app.state';
import { laureatesReducer } from './app.reducer';
import { EffectsModule, EffectsRootModule, EffectSources } from '@ngrx/effects';
import { LaureateFacade } from './app.facade';
import { LaureateEffects } from './app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 5 }),
    StoreModule.forRoot({}),
    StoreModule.forFeature(FEATURE_KEY, laureatesReducer),
    EffectsModule.forFeature([LaureateEffects]),
    EffectsRootModule,
    MatCardModule,
    MatListModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [LaureateFacade, EffectSources, InjectionToken],
})
export class AppModule {}
