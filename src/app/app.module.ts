import { InjectionToken, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule, EffectsRootModule, EffectSources } from '@ngrx/effects';
import { LaureateEffects } from './app.effects';
import { LaureateFacade } from './app.facade';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FEATURE_KEY } from './app.state';
import { laureatesReducer } from './app.reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EffectsRootModule,
    StoreDevtoolsModule.instrument({ maxAge: 5 }),
    StoreModule.forRoot({}),
    StoreModule.forFeature(FEATURE_KEY, laureatesReducer),
    EffectsModule.forFeature([LaureateEffects]),
    MatCardModule,
    MatListModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [InjectionToken, LaureateFacade, EffectSources],
})
export class AppModule {}
