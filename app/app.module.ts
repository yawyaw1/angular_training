import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
Chapter 2 ■ Your First Angular App
21
@NgModule({
 imports: [BrowserModule, FormsModule],
 declarations: [AppComponent],
 bootstrap: [AppComponent]
})
export class AppModule { }