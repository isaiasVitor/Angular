import { SignosService } from './services/signos.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignosListagemComponent } from './signos-listagem/signos-listagem.component';
@NgModule({
  declarations: [
    AppComponent,
    SignosListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ SignosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
