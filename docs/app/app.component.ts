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
                legend: {
                        position: 'right'
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
            },
            'stackedArea': {
                 data: {
                    columns: [
                        ['data1', 300, 350, 300, 0, 0, 120],
                        ['data2', 130, 100, 140, 200, 150, 50]
                    ],
                    types: {
                        data1: 'area-spline',
                        data2: 'area-spline'
                        // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
                    },
                    groups: [['data1', 'data2']]
                },
                 grid: {
                    x: {
                        show: true
                    },
                    y: {
                        show: true
                    }
                }
            },
            'stackedBar': {
                    data: {
                        columns: [
                            ['data1', 130, 200, 320, 400, 530, 750],
                            ['data2', -130, 10, 130, 200, 150, 250],
                            ['data3', -130, -50, -10, -200, -250, -150]
                        ],
                        type: 'bar',
                        groups: [
                            ['data1', 'data2', 'data3']
                        ],
                        order: 'desc' // stack order by sum of values descendantly. this is default.
                    },
                    grid: {
                        y: {
                            lines: [{value:0}]
                        }
                    }
            },
            'guageChart': {
                    data: {
                        columns: [
                            ['data', 91.4]
                        ],
                        type: 'gauge',
                        onclick: function (d, i) { console.log("onclick", d, i); },
                        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                     },
                    color: {
                        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
                        threshold: {
                            values: [30, 60, 90, 100]
                        }
                    },
                    size: {
                        height: 180
                    }
            }

        };

        this._chartTypes = [{
            key: 'line',
            text: 'Line Chart'
        },
        {
            key: 'bar',
            text: 'Bar Chart with Custom Legend'
        },
        {
            key: 'spline',
            text: 'Spline Chart 2 axes'
        },
        {
            key: 'stackedArea',
            text: 'Stacked Area with Grid'
        },
        {
            key: 'pie',
            text: 'Pie Chart'
        },
        {
            key: 'stackedBar',
            text: 'stacked Bar chart with data order'
        },
        {
            key: 'guageChart',
            text: 'Guage Chart'
        }
        ];

        this.handleChartChange(this._chartTypes[0].key);
    }

    public handleChartChange ( type: string) : void {
        let _object : any = this._allCharts[type];
        this._chartConfig = {};
        this._chartOptions = {};
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




