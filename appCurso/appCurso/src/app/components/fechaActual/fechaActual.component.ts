import { Component } from '@angular/core';

@Component({
    selector: 'app-fechaactual',
    templateUrl: './fechaActual.component.html'
   /* template: `
            <p> Málaga, {{ hoy | date:'d/M/y H:m'}}</p>
            `*/
})

export class FechaActualComponent {
    hoy: any = new Date();
}
