import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FechaActualComponent } from './components/fechaActual/fechaActual.component';
import { CopyrightComponent } from './components/copyright/copyright/copyright.component';
import { ViewmodeloComponent } from './components/viewmodelo/viewmodelo.component';
import { EjmetodoComponent } from './components/ejmetodo/ejmetodo.component';
import { EjpropertybindingComponent } from './components/ejpropertybinding/ejpropertybinding.component';
import { EjeventbindingComponent } from './components/ejeventbinding/ejeventbinding.component';
import { Ej2waybindingComponent } from './components/ej2waybinding/ej2waybinding.component';
import {FormsModule} from '@angular/forms';
import { EjdirectivangifComponent } from './components/ejdirectivangif/ejdirectivangif.component';
import { EjdirectivangstyleComponent } from './components/ejdirectivangstyle/ejdirectivangstyle.component';
import { EjdirectivangClassComponent } from './components/ejdirectivang-class/ejdirectivang-class.component';
import { EjdirectivangforComponent } from './components/ejdirectivangfor/ejdirectivangfor.component';
import { ArrayobjetosComponent } from './components/arrayobjetos/arrayobjetos.component';
import { EjdirectivangswitchComponent } from './components/ejdirectivangswitch/ejdirectivangswitch.component';
import { MenuitemDirective } from './directives/menuitem.directive';
import { EjmidirectivaComponent } from './components/ejmidirectiva/ejmidirectiva.component';
import { PadreComponent } from './components/padre/padre.component';
import { HijoComponent } from './components/hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    FechaActualComponent,
    CopyrightComponent,
    ViewmodeloComponent,
    EjmetodoComponent,
    EjpropertybindingComponent,
    EjeventbindingComponent,
    Ej2waybindingComponent,
    EjdirectivangifComponent,
    EjdirectivangstyleComponent,
    EjdirectivangClassComponent,
    EjdirectivangforComponent,
    ArrayobjetosComponent,
    EjdirectivangswitchComponent,
    MenuitemDirective,
    EjmidirectivaComponent,
    PadreComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
