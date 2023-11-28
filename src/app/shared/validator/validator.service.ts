import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }


  noPuedeSerStrider(control: FormControl): ValidationErrors | null {
    const valor: string = control.value?.trim().toLowerCase();

    if (valor === 'strider') {
      // return ERROR! retur de un obj
      //Si regresa un obj es un error
      return {
        noStrider: true
      }
    }

    //Validación Sincrona
    //Cuando se regresa null en una validación significa que no hay ningún error, todo está bien.
    return null;
  }

  //Función que lee los campos en tiempo real
  //Va a recibir argumentos a una función, 
  //que funciona como un validador
  //this.validatorSer... solo se manda la referencia, no ejecutan
  //**Al ejecutar esta función debe regresar una función */
  camposIguales(campo1: string, campo2: string) {

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      //Se debe negar, si pasa es un error
      if (pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({ noIguales: true });
        return { noIguales: true }
      }

      formGroup.get(campo2)?.setErrors(null);

      return null;
    }
  }
}
