import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GroceryComponent } from './app.grocery';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // AppComponent,
    GroceryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ GroceryComponent]
})
export class AppModule { }
