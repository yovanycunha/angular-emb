import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse} from '@angular/common/http';
import { CadastraCarrosService} from '../_services/cadastra-carros.service';



@Component({
  selector: 'app-carro',
  templateUrl: './cadastra-carros.component.html',
  styleUrls: ['./cadastra-carros.component.css']
})
export class CarroComponent implements OnInit {

  carro;

  constructor(private cadastraCarrosService: CadastraCarrosService) {
    this.carro = {};
  }

  cadastraCarro() {
    this.cadastraCarrosService.cadastraCarro(this.carro).subscribe((res) => {
      console.log('Carro cadastrado com sucesso');
    }, (response: HttpErrorResponse) => {
      console.log('Erro no cadastro de carro');
    });
  }

  ngOnInit() {
  }

}
