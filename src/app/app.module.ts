import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AlunoService } from './domain/aluno/aluno.service';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CursoService } from './domain/curso/curso.service';
import { CursoComponent } from './curso/curso.component';
import { ListarCursoComponent } from './listar-curso/listar-curso.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { ModalComponent } from './modal/modal.component';

import { GlobalService } from './global.service';
import { AlunoListagemComponent } from './aluno/aluno-listagem/aluno-listagem.component';
import { AlunoDetalheComponent } from './aluno/aluno-detalhe/aluno-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    ListarCursoComponent,
    MenuLateralComponent,
    ModalComponent,
    AlunoListagemComponent,
    AlunoDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AlunoService,
    CursoService,
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
