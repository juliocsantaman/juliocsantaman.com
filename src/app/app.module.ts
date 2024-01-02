import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppInitializersModule } from './core/app-initializers/app-initializers.module';
import { PackagesModule } from './core/packages/packages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppInitializersModule,
    PackagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
