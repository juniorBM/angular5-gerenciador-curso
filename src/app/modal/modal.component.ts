import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListarCursoComponent } from './../listar-curso/listar-curso.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalService } from './../global.service';
import { CursoService } from './../domain/curso/curso.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss', './../app.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() titulo: string;
  @Input() textoCorpo: string;
  @Input() rota: string;
  @Input() rotaFront: string;
  @Input() idDeleta: number;
  @Input() modulos: any[] = [];
  @Input() modulo: any = [];

  @Output()
    deletar = new EventEmitter();

  private sucesso: boolean = false;
  private apiUrl: string = 'http://127.0.0.1:8030/';
  public id: any;

  constructor(
    private globalService: GlobalService,
    private cursoService: CursoService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.id = '';
  }

  mostrarModal() {
    
    document.querySelector('div.modal').style.display = 'block';
    document.querySelector('div.modal-conteudo').style.display = 'block';
  }

  fecharModal() {
    document.querySelector('div.modal').style.display = 'none';
    document.querySelector('div.modal-conteudo').style.display = 'none';
  }

  executar() {
    this.deletar.emit('complete');
    this.fecharModal();
  }

}
