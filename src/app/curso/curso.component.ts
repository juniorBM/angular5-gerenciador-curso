import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Curso } from './../domain/curso/curso';
import { CursoService } from './../domain/curso/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss', './../app.component.scss']
})
export class CursoComponent implements OnInit {
  private curso: Curso;
  public sucesso: boolean = false;
  public erro: boolean = false;
  public tituloBotao: string = 'Cadastra curso';
  private novo: boolean = true;
  private id: number = 0;

  constructor(
    private cursoService: CursoService,
    private route: ActivatedRoute
  ) {
    
   }

  ngOnInit() {
    this.curso = new Curso();

    this.route.params.forEach((params: Params) => {
      let id: number = +params['id'];
      
      if (id) {
        this.novo = false;
        this.id = id;
        this.tituloBotao = 'Salvar curso';
        this.listarCurso(id);
      }

    });
    
  }

  adicionarCurso(curso: Curso) {
    this.curso = curso;
    console.log(this.curso);
    this.cursoService.adicionarCurso(this.curso)
      .then((data: any) => {
        this.sucesso = true;
      }).catch(err => {
        this.erro = true;
      });
    
  }

  listarCurso(id: number) {
    this.cursoService.editarCurso(id)
      .then((data: any) => {
        this.curso = data.retorno;
        console.log(this.curso);
        
      }).catch(err => {

      });
  }

  salvarCurso(curso: Curso, id: number) {
    this.cursoService.salvarCurso(curso, id)
      .then((data: any) => {
        console.log(data);
      });
  }

  submeter() {
    if(this.novo) {
      this.adicionarCurso(this.curso);
    } else {
      this.salvarCurso(this.curso, this.id);
    }
  }
}
