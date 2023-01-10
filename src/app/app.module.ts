import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { RodapeModule } from './componentes/rodape/rodape.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComentariosComponent } from './petbook/src/app/animais/detalhe-animal/comentarios/comentarios.component';

@NgModule({
  declarations: [AppComponent, ComentariosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CabecalhoModule,
    RodapeModule,
    AutenticacaoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
