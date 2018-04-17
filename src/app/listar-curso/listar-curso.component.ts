import { Component, OnInit, Input, Output } from '@angular/core';
import { CursoService } from './../domain/curso/curso.service';
import { ModalComponent } from './../modal/modal.component';
@Component({
  selector: 'app-listar-curso',
  templateUrl: './listar-curso.component.html',
  styleUrls: ['./listar-curso.component.scss', './../app.component.scss']
})

export class ListarCursoComponent implements OnInit {
  @Input()
  public cursos: any[] = [];
  modal: ModalComponent;
  titulo: string = '';
  textoCorpo: string = '';
  funcao: string = '';
  idDeleta: number = 0;
  rota: string = '';
  rotafront: string = '';
  curso: any = '';
  constructor(
    private cursoService: CursoService,
  ) { }

  ngOnInit() {
    this.listarCurso();
    this.modal = new ModalComponent();
    this.titulo = 'Deletar curso!';
    this.textoCorpo = 'Este curso será removido. Deseja remover?';
  }

  listarCurso() {
    this.cursoService.listarCurso()
      .then((data: any[]) => {
        this.cursos = data.retorno;
      });
  }

  pegarId(id, curso) {
    console.log(curso);
    
    this.curso = curso
    this.idDeleta = id;
    this.rota = '/curso/' + this.idDeleta;
    this.rotafront = '/listar-cursos'; 
  }

  deletaCurso(id) {
    console.log('Deu certo' + id);
    
    this.cursos = this.cursos.filter((item) => {
      return item.id != id;
    });

    this.cursoService.deletarCurso(id)
      .then((data) => {
        console.log(data);
        
      });
   
  } 
}
