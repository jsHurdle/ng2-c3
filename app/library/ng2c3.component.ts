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
  encapsulation: ViewEncapsulation.None
})
export class Ng2C3 {

  @Input()
  private data : any; // Configuration for series to be used for generating C3 has to be here
  private element : HTMLElement; // Element to which the chart has to be attached to

  constructor(elementReference : ElementRef) {
    
    this.element = elementReference.nativeElement;
  }

  private __render( inputData : any) : void {
    let _this : Ng2C3 = this;
    if(this.isValid(inputData)) {

      let c3InputData : any = {};

      //TODO: Dynamically set keys and values to the map
      c3InputData['bindto'] = _this.element;
      c3InputData['data'] = inputData;

      /*
	  Should find a way to check for proper inputs
	  if(!this.isValidInput(c3InputData)) {
        throw new Error('Invalid Configuration passed');
      }*/

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
      this.__render( this.data );
    } catch(err) {
      console.log(err);
    }
  }

}
