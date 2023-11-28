import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.less']
})
export class RegistroComponent implements OnInit {

  //this.validatorSer... solo se manda la referencia, no ejecutan
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.maxLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    //Todas las validaciones que se aplicarán al formulario de arriba
    validators: [this.validatorService.camposIguales('password', 'password2')]
  });

  //El getter se va a ejecutar siempre que Angular detecte un cambio en el componente
  get emailErrorMsg(): string {

    const errors = this.miFormulario.get('email')?.errors;

    if (errors?.['required']) {
      return 'Email es obligatorio';
    } else if (errors?.['pattern']) {
      return 'El formato no es el correcto';
    } else if (errors?.['emailTomado']) {
      return 'El email ya fue tomado';
    }

    return '';
  }

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Pancha Herrera',
      email: 'test@test.com',
      username: 'emyrub',
      password: '123456',
      password2: '123456'
    })

  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched
  }

  /*
    emailRequired() {
      return this.miFormulario.get('email')?.errors?.['required']
        && this.miFormulario.get('email')?.touched
    }
  
    emailFormato() {
      return this.miFormulario.get('email')?.errors?.['pattern']
        && this.miFormulario.get('email')?.touched
    }
  
    emailTomado() {
      return this.miFormulario.get('email')?.errors?.['emailTomado']
        && this.miFormulario.get('email')?.touched
    }*/

  submitFormulario() {
    this.miFormulario.markAllAsTouched();
  }
}
