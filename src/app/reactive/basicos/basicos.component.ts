import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.less']
})
export class BasicosComponent implements OnInit {

  //VERSIÓN 1
  // miFormulario: FormGroup = new FormGroup({
  //   'nombre': new FormControl('RTX 4080T'),
  //   'precio': new FormControl(1500),
  //  'existencias': new FormControl(5),
  //})

  //VERSION 2
  //Se pone como arreglos por validaciones
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [0, Validators.min(0)],
    existencias: [0, Validators.min(0)],
  })

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'RTX 4080',
      precio: 1600,
      existencias: 10
    })
  }

  campoNoValido(campo: string) {
    return this.miFormulario.controls[campo].errors 
    && this.miFormulario.controls[campo].touched
  }

  guardar() {

    if (this.miFormulario.invalid) {
      //Cambia los inputs como marcados
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    //Regresa a los valores por default
    this.miFormulario.reset();
  }

}
