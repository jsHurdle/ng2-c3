import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'demo-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    private _data : any;
    // Initializing chartOptions and chartConfigs with empty object
    private _chartOptions : any = {};
    private _chartConfig : any = {};

    private _chartTypes : any;
    private _allCharts : any;

    private _c3Configs : Array<string> = ['axis', 'tooltip', 'grid', 'legend', 'zoom', 'regions', 'subchart'];
    private _c3Options : Array<string> = ['size', 'padding', 'color', 'interaction', 'transition', 'point', 'line', 'area', 'bar', 'pie', 'donut', 'gauge'];

    constructor() {

        this._allCharts = {
            'line': {
                data: {
                    x: 'x',
                    columns: [
                        ['x', 30, 50, 100, 230, 300, 310],
                        ['data1', 30, 200, 100, 400, 150, 250],
                        ['data2', 130, 300, 200, 300, 250, 450]
                    ]
                }
            },
            'bar': {
                data: {
                    columns: [
                        ['data1', 30, 200, 100, 400, 150, 250],
                        ['data2', 130, 100, 140, 200, 150, 50]
                    ],
                    type: 'bar'
                },
                chartOptions: {
                    bar: {
                        width: {
                            ratio: 0.5
                        }
                    }
                }
            },
            'pie': {
                data: {
                    columns: [
                        ['data1', 30],
                        ['data2', 120],
                    ],
                    type : 'pie'
                }
            },
            'spline': {
                data: {
                    columns: [
                        ['data1', 30, 200, 100, 400, 150, 250],
                        ['data2', 50, 20, 10, 40, 15, 25]
                    ],
                    axes: {
                        data1: 'y',
                        data2: 'y2'
                    },
                    type: 'spline'
                },
                axis: {
                    y2: {
                        show: true
                    }
                }
            }
        };

        this._chartTypes = [{
            key: 'bar',
            text: 'Bar Chart'
        },
        {
            key: 'pie',
            text: 'Pie Chart'
        },
        {
            key: 'line',
            text: 'Line Chart'
        },
        {
            key: 'spline',
            text: 'Spline Chart 2 axes'
        }];

        this.handleChartChange(this._chartTypes[0].key);
    }

    public handleChartChange ( type: string) : void {
        let _object : any = this._allCharts[type];
        if(_object['data']) {
            this._data = _object['data'];
            for(let key in _object) {
                if(this._c3Configs.indexOf(key) !== -1) {
                    this._chartConfig[key] = _object[key];
                }
                else if (this._c3Options.indexOf(key) !== -1) {
                    this._chartOptions[key] = _object[key];
                }
            }
            
        }
    }
}