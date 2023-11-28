import { FormControl } from "@angular/forms";

export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


export const noPuedeSerStrider = (control: FormControl) => {
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