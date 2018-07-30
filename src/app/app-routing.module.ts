import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { FeedListComponent } from './feed/feed-list/feed-list.component';
import { FeedAddComponent } from './feed/feed-add/feed-add.component';
// import { CursoComponent } from './curso/curso.component';
// import { ListarCursoComponent } from './listar-curso/listar-curso.component';
// import { AlunoDetalheComponent } from './aluno/aluno-detalhe/aluno-detalhe.component';
// import { AlunoListagemComponent } from './aluno/aluno-listagem/aluno-listagem.component';

const routes: Routes = [
  { path: '', redirectTo: 'register-user', pathMatch: 'full'},
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'feed-list', component: FeedListComponent },
  { path: 'feed-add', component: FeedAddComponent }
  // { path: 'curso', component: CursoComponent},
  // { path: 'listar-cursos', component: ListarCursoComponent },
  // { path: 'editar-curso/:id', component: CursoComponent },
  // { path: 'deletar-curso/:id', component: ListarCursoComponent },
  // { path: 'aluno', component: AlunoDetalheComponent },
  // { path: 'listar-alunos', component: AlunoListagemComponent }
];

@NgModule({
  imports: [
  CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
