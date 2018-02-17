import {Component} from '@angular/core';

@Component({
  selector: 'manual',
  template: `

    <h2>Componente hecho de forma manual</h2>
    <h3>{{nombre}}</h3>
    <h3 [style.background]="yellow" *ngIf="mostrarEjemplo">Ejemplo if en componente {{ejemplo}}</h3>
    <button (click)="mostrarEjemplo = !mostrarEjemplo">toogle</button>
    <h4>lista desde un array</h4>
    <ul>
      <li *ngFor="let sample of arraySample">{{ sample }}</li>
    </ul>
  `
})
export class ManualComponent{
  public nombre = 'Componente';
  public ejemplo = 'Manual';
  public mostrarEjemplo = false;

  public arraySample = ['algun', 'número', 123];
}
