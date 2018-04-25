import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Aluno } from './../../domain/aluno/aluno';
import { AlunoService } from './../../domain/aluno/aluno.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss', './../../app.component.scss']
})
export class AlunoDetalheComponent implements OnInit {
  private aluno: Aluno;
  private idAluno: number;
  private tituloBotao: string = 'Cadastrar aluno';
  private novo: boolean = true;
  private dataNascimento = { dataDia: '', dataMes: '', dataAno: '' };
  private sucesso: boolean = false;
  private erro: boolean = false;
  
  private dias: any[] = [];
  private meses: any[] = [];
  private anos: any[] = [];

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.aluno = new Aluno();

    let dia: string = '';
    let mes: string = '';

    for (let i = 1; i < 32; i++) {
      if (i.toString().length == 1) {
        dia = '0' + i.toString();
      } else {
        dia = i.toString();
      }
      this.dias.push(dia);
    }

    for (let i = 1; i < 13; i++) {
      if (i.toString().length == 1) {
        mes = '0' + i.toString();
      } else {
        mes = i.toString();
      }
      this.meses.push(mes);
    }

    let ano = new Date().getFullYear();
    for (let i = ano; i > (ano - 100); i--) {
      this.anos.push(i);
    }

    this.route.params.forEach((params: Params) => {
      let id: number = +params['id'];
      if (id) {
        this.idAluno = id;
        this.tituloBotao = 'Salvar aluno';
        this.novo = false
      }
    })
  }


  submeter(aluno: Aluno) {
    this.aluno = aluno;
    this.aluno.data_nascimento = this.dataNascimento.dataAno + '-' + this.dataNascimento.dataMes + '-' + this.dataNascimento.dataDia;
    
    if (this.novo) {
      this.adicionarAluno(aluno);
    }
    
  }

  adicionarAluno(aluno: Aluno) {
    this.alunoService.adicionarAluno(aluno)
      .then((result: any) => {
        console.log(result);
        
        this.sucesso = true;
      }).catch((err) => {
        this.erro = true;
        console.log(err.error);
      });
  }

}
