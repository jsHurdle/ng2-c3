/// <reference path="../typings/index.d.ts" />

import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div style='width:500px;'>
                    <ng2-c3 [data]='_data' [chartOptions]='_chartOptions' [configs]='_configs'></ng2-c3>
               </div>`
})

export class AppComponent {
   private _data : any;
   private _chartOptions : any;
   private _configs : any;

   constructor() {

       // data for the chart
       this._data = {
            columns: [
            ['data1', 30, 20, 50, 40, 60, 50],
            ['data2', 200, 130, 90, 240, 130, 220],
            ['data3', 300, 200, 160, 400, 250, 250],
            ['data4', 200, 130, 90, 240, 130, 220],
            ['data5', 130, 120, 150, 140, 160, 150],
            ['data6', 90, 70, 20, 50, 60, 120],
        ],
        type: 'bar',
        types: {
            data3: 'spline',
            data4: 'line',
            data6: 'area',
        },
        groups: [
            ['data1','data2']
        ]
       };

       //Options provided for chart like axis, tooltip, legend, zoom etc.
       this._configs = {
           'axis' : {
                y2: {
                    show: true
                },
           },
           'tooltip': {
                format: {
                    title: function (d) { return 'Data ' + d; }
                }
           },
           'grid' : {
                x: {
                    show: true
                },
                y: {
                    show: true
                }
           },
           'legend' : {
                position: 'inset'
           },
           'zoom': {
                enabled: true
           }
        };

        //Specific Chart Configuration
        this._chartOptions = {
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
        };

   }
}
