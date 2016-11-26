import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'demo-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    private _data : any;
    constructor() {
        this._data = {
            x: 'x',
            columns: [
                ['x', 30, 50, 100, 230, 300, 310],
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 130, 300, 200, 300, 250, 450]
            ]
        };
    }
}