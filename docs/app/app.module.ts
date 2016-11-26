import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Ng2C3} from 'https://raw.githubusercontent.com/jsHurdle/ng2-c3/master/app/library/ng2c3.component.ts';
import {AppComponent} from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, Ng2C3],
    bootstrap: [AppComponent]
})
export class AppModule {

}