import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
//modulos personalizados
import { AppComponent } from './app.component';
import { CompartidoModule } from './compartido/compartido.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CompartidoModule,
    UsuariosModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
