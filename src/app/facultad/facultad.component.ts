import { Component, OnInit } from '@angular/core';
import { Facultad } from './facultad';

@Component({
  selector: 'app-facultad',
  templateUrl: './facultad.component.html',
  styleUrls: ['./facultad.component.css']
})
export class FacultadComponent implements OnInit {
facultades:Facultad[]=[
{id:1, nomfacultad:"Fia"},
{id:2, nomfacultad:"FacTeo"},
{id:3, nomfacultad:"Salud"},
{id:4, nomfacultad:"Empresariales"},
]
  constructor() { }

  ngOnInit(): void {
  }

}
