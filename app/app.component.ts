/// <reference path="../typings/index.d.ts" />

import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

//Including Ng2C3 component into the application
import {Ng2C3} from './library/ng2c3.component';


@Component({
    selector: 'my-app',
    template: `<div style='width:500px;height:500px'>
                    <ng2-c3 [data]='_data'></ng2-c3>
                </div>`
})

export class AppComponent {
   private _data : any;
   constructor() {
       // Initializing Data
       this._data = {
            columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ]
       } 
   }

}
