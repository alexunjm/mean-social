import {Component} from '@angular/core';

@Component({
  selector: 'manual',
  templateUrl: './manual.component.html'
})
export class ManualComponent{
  public nombre: string;
  public ejemplo: string;
  public mostrarEjemplo: boolean;

  public arraySample: Array<any>;

  constructor(){

    this.nombre = 'Componente';
    this.ejemplo = 'Manual';
    this.mostrarEjemplo = false;

    this.arraySample = ['algun', 'número', 123];
  }
}
