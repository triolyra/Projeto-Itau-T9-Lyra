import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inclusao-penhor',
  templateUrl: './inclusao-penhor.component.html',
  styleUrls: ['./inclusao-penhor.component.css']
})
export class InclusaoPenhorComponent implements OnInit {

  produto: string = "12345678889"
  cliente: string= "Taylor Swift"
  contrato: string ="12345"
  cnpj: string= "13.1313.131/1313-13"

  constructor() { }

  ngOnInit(): void {
  }

}
