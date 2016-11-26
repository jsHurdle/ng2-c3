import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {Ng2C3} from './library/ng2c3.component';


@NgModule({
    imports:        [BrowserModule],
    declarations:   [AppComponent, Ng2C3],
    bootstrap:      [AppComponent]
})

export class AppModule {}
