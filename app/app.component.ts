/// <reference path="../typings/index.d.ts" />

import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div style='width:500px;height:500px'>
                    <ng2-c3 [grid]='_grid' [legend]='_legend' [zoom]='_zoom' [point]='_point' [data]='_data' [axis]='_axis' [tooltip]='_tooltip' [chartConfig]='_chartConfig'></ng2-c3>
               </div>`
})

export class AppComponent {
   private _data : any;
   private _axis : any;
   private _tooltip : any;
   private _chartConfig : any;

   private _grid : any;
   private _legend : any;
   private _zoom : any;
   private _point : any;

   constructor() {
       // Initializing Data
       this._data = {
            columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ],
        axes: {
            data1: 'y',
            data2: 'y2'
        },
       };
       
       //Specific Axis Configuration
       this._axis = {
            y2: {
                show: true
            }
        };
        
        //Specific tooltip Configuration
        this._tooltip = {
            format: {
                title: function (d) { return 'Data ' + d; }
            }
        };

        //Specific Chart Configuration
        this._chartConfig = {
             size: {
                height: 240,
                width: 480
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

        // Specify Grid related Configuration
        this._grid = {
            x: {
                show: true
            },
            y: {
                show: true
            }
        };

        // Specify Legend related Configuration
        this._legend = {
            position: 'inset'
        };

        // Specify Zooming related Configuration
        this._zoom = {
            enabled: true
        };

        // Specify Point related Configuration
        this._point = {
            show: true
        };
        
   }
}
