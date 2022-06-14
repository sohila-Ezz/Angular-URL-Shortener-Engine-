import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './Components/body/body.component';
import { URLsComponent } from './Components/urls/urls.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './Components/main/main.component';
import { UpdateComponent } from './Components/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    URLsComponent,
    MainComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
