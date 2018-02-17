import {Component} from '@angular/core';

@Component({
  selector: 'manual',
  templateUrl: './manual.component.html'
})
export class ManualComponent{
  public nombre = 'Componente';
  public ejemplo = 'Manual';
  public mostrarEjemplo = false;

  public arraySample = ['algun', 'número', 123];
}
