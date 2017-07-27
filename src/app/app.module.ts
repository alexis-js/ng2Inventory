import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {WelcomeComponent} from './home/welcome.component';
import {AppComponent} from './app.component';
import {ProductModule} from './products/product.module';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
