import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(private http: HttpClient) { }

  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {

    //throw new Error('Method not implemented.');

    const email = control.value;


    //Esta transformando el valor del observable >.get<any><
    //en null u observalo
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
      .pipe(
        delay(3000),
        map(resp => {
          return (resp.length === 0)
            ? null
            : { emailTomado: true }
        })
      );
  }

  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
}
