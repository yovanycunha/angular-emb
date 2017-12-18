import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CadastraCarrosService} from './_services/cadastra-carros.service';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';



import { AppComponent } from './app.component';
import { CarroComponent } from './cadastra-carros/cadastra-carros.component';
import { ListaCarrosComponent } from './lista-carros/lista-carros.component';


@NgModule({
  declarations: [
    AppComponent,
    CarroComponent,
    ListaCarrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClient
  ],
  providers: [CadastraCarrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
