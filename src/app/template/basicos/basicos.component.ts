import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.less']
})
export class BasicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX 4080',
    precio: 0,
    existencias: 10
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls['producto']?.invalid
      && this.miFormulario?.controls['producto']?.touched;
  }

  precioValido(): boolean {
    return this.miFormulario?.controls['precio']?.touched
      && this.miFormulario?.controls['precio']?.value < 0;
  }

  //Formulario tipo ngForm
  // guardar(miFormulario: NgForm) {
  guardar() {
    console.log(this.miFormulario);

    //Resetea el formulario, los valores se escriben al postear
    this.miFormulario.resetForm({
      producto: 'Cualquiera',
      precio: 0,
      existencias: 0
    });

    if (this.miFormulario.controls['precio'].value < 0) {
      console.log('No posteado');
      return;
    }
  }

}
