import {Component, Input, SimpleChange, ElementRef, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
//Below Declaration is mandatory
//As C3 does not export any component
declare var c3:any;

/**
 * Ng2-C3 angular2 directive for C3 charts
 *
 * Usage:
 * eg.) <ng2-c3 bind-data="dataFromTheComponentOrWherever"></ng2-c3>
 *
 * 1. MultiLine chart takes the parameters
 *      a. data of c3 configuration
 */
  //TODO: Handle more generic items for various other types of charts
@Component({
  selector: 'ng2-c3',
  template: ``,
  encapsulation: ViewEncapsulation.None,
  inputs:['data', 'axis', 'tooltip', 'chartConfig', 'grid', 'legend', 'zoom', 'point'],
  styles:[`.ng2-c3{ display:block;}`] // This is required for proper positioning of tooltip
})
export class Ng2C3 {

  // All Inputs for this component declaration
  private data : any; // Configuration for series to be used for generating C3 has to be here
  private axis : any; // Configuration for axis 
  private tooltip:any; // Tooltip configuration
  private chartConfig:any // Creating chart configuration

  private grid : any; // Configuration for grid related things of C3
  private legend : any; // Configuration for using legend
  private zoom : any; // Configuration for zooming if needed
  private point : any; // Configuration for point related things of C3

  private element : HTMLElement; // Element to which the chart has to be attached to

  constructor(elementReference : ElementRef) {
    
    this.element = elementReference.nativeElement;
    // Adding the below line to specify CSS for the ng2-c3 selector
    this.element.className += " ng2-c3";
  }

  private __render( inputData:any, axisData:any, tooltipData:any, chartConfigData:any, gridData:any, legendData:any, zoomData:any, pointData:any) : void {
    let _this : Ng2C3 = this;
    if(this.isValid(inputData)) {

      let c3InputData : any = {};

      //TODO: Dynamically set keys and values to the map
      c3InputData['bindto'] = _this.element;
      c3InputData['data'] = inputData;

      if(this.isValid(axisData)){
        c3InputData['axis'] = axisData;
      }

      if(this.isValid(tooltipData)) {
        c3InputData['tooltip'] = tooltipData;
      }

      if(this.isValid(gridData)) {
        c3InputData['grid'] = gridData;
      }

      if(this.isValid(legendData)) {
        c3InputData['legend'] = legendData;
      }

      if(this.isValid(zoomData)) {
        c3InputData['zoom'] = zoomData;
      }

      if(this.isValid(pointData)) {
        c3InputData['point'] = pointData;
      }


      /**
       * Chart Configuration could have multiple Options
       * Size, padding, color Pattern, Transition
       * Some callback initializers like OnInit, Onrendered, OnMouseOver, OnMouseOut
       *  
       **/
      if(this.isValid(chartConfigData)) {
        for(let key in chartConfigData) {
          c3InputData[key] = chartConfigData[key];
        }
      }

      /**
       * Should find a way to check for proper inputs
       * if(!this.isValidInput(c3InputData)) {
       *     throw new Error('Invalid Configuration passed');
       * }
       * 
       */
        c3.generate(c3InputData); // Generates the C3 chart for the given configuration and places it inside the directive's element.
    }

  }

  //A utility method to check if a provided value is valid
  private isValid(randomInput : any) : boolean {
    return randomInput !== undefined && randomInput !== null;
  }

  /* A utility method that gets a map and checks if all the values in the map are valid
      Returns true if all are valid,
      Returns False, otherwise
      TODO: Check for various other input scenarios
   */
  private isValidInput(randomInput : any) : boolean {
    let flag : boolean = true;
    for(let key in randomInput) {
      if(!this.isValid(randomInput[key])) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  //Checks for the changes made in the data and re-renders the charts accordingly
  private ngOnChanges( changes: { [propertyName: string]: SimpleChange } ): void {
    try {
      this.__render( this.data, this.axis, this.tooltip, this.chartConfig, this.grid, this.legend, this.zoom, this.point);
    } catch(err) {
      console.log(err);
    }
  }

}
