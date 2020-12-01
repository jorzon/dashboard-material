import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  sede: string;
  ano: number;
  aula: string;
  programa: string;
  grado: string;
  beca: string;
  estado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    ano: 2020,
    sede: 'PREMIUM COLLEGE SURCO',
    aula: 'LOS LEÑADORES',
    programa: 'Año Lectivo',
    grado: '1 PRI',
    beca: 'SOCIOECONOMICO',
    estado: 'Activo'
  },
  {
    ano: 2019,
    sede: 'PREMIUM COLLEGE SURCO',
    aula: 'LOS LEÑADORES',
    programa: 'Año Lectivo',
    grado: '1 PRI',
    beca: 'SOCIOECONOMICO',
    estado: 'Activo'
  },
  {
    ano: 2018,
    sede: 'PREMIUM COLLEGE SURCO',
    aula: 'LOS LEÑADORES',
    programa: 'Año Lectivo',
    grado: '1 PRI',
    beca: 'SOCIOECONOMICO',
    estado: 'Inactivo'
  },
  {
    ano: 2017,
    sede: 'PREMIUM COLLEGE SURCO',
    aula: 'LOS LEÑADORES',
    programa: 'Año Lectivo',
    grado: '1 PRI',
    beca: 'SOCIOECONOMICO',
    estado: 'Activo'
  }
];

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {
  displayedColumns: string[] = [
    'ano',
    'sede',
    'aula',
    'programa',
    'grado',
    'beca',
    'estado'
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor() {}

  ngOnInit(): void {}
}
