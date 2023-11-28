import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector: '[customMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validator {

    // Obtiene la información del input
    @Input() minimo!: number;

    constructor() {
    }

    //Tiene que regresar algo
    validate(control: FormControl) {
        const inputValue = control.value;

        console.log(inputValue);
        console.log('minimo', this.minimo);

        return (inputValue < this.minimo)
            ? { 'customMin': true }
            : null;
    }

}