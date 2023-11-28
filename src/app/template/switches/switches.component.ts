import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.less']
})
export class SwitchesComponent {

  persona = {
    genero: 'F',
    notificaciones: true
  }

  terminosYcondiciones: boolean = false;

}