import { SignosService } from './../services/signos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signos-listagem',
  templateUrl: './signos-listagem.component.html',
  styleUrls: ['./signos-listagem.component.css']
})
export class SignosListagemComponent implements OnInit {

  signos: Array<any>;

  constructor(private signoService: SignosService) {
   }

  ngOnInit() {
    this.listar();

  }

  listar() {
    this.signoService.getAll().subscribe((dados: any) => {
      this.signos = dados.data;
    });
  }



}
