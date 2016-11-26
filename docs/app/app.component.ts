import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'demo-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    private _data : any;
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
                    columns: [
                        ['data1', 30, 200, 100, 400, 150, 250],
                        ['data2', 130, 300, 200, 300, 250, 450]
                    ],
                     axes: {
                        data1: 'y',
                        data2: 'y2'
                   }
                },
                chartOptions: { 
                    size: { 
                        height: 500,
                        width: 800
                    },
                    padding: {
                        top: 40,
                        right: 100,
                        bottom: 40,
                        left: 100,
                    },
                    color: {
                        pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
                    },
                    transition: {
                        duration: 100
                    }
                },
                chartConfigs: {
                     axis: {
                        y2: {
                            show: true
                        }
                    }
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
        }];

        this.handleChartChange(this._chartTypes[0].key);
    }

    public handleChartChange ( type: string) : void {
        let _object : any = this._allCharts[type];
        // Exit condition
        if(_object['data']==='null' || _object['data']==='undefined') {
            return;
        }

        if(_object['data']) {
            this._data = _object['data'];
        }
        for(let key in _object) {
            if(key === "data" ) {
                continue;
            }
            else {
                let configProperties = _object[key];
                // Looping through to set chart config and chart options for the component
                for(let hashKey in configProperties) {
                    if(this._c3Configs.indexOf(hashKey) !== -1) {
                        this._chartConfig[hashKey] = configProperties[hashKey];
                    }
                    else if (this._c3Options.indexOf(hashKey) !== -1) {
                        this._chartOptions[hashKey] = configProperties[hashKey];
                    }
                }
            }

        }
    
    }
}