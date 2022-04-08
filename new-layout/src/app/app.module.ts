import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortalModule } from './portal/portal.module';
import { PrintService } from './portal/services/print.service';
import { AcessibilityBarComponent } from './components/acessibility-bar/acessibility-bar.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { FootBarComponent } from './components/foot-bar/foot-bar.component';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { ObjectiveContentComponent } from './components/objective-content/objective-content.component';
import { MapaServicosComponent } from './components/mapa-servicos/mapa-servicos.component';
import { AjudaContentComponent } from './components/ajuda-content/ajuda-content.component';
import { ContatoContentComponent } from './components/contato-content/contato-content.component';

@NgModule({
  declarations: [
    AppComponent,
    AcessibilityBarComponent,
    MenuBarComponent,
    FootBarComponent,
    InitialPageComponent,
    ObjectiveContentComponent,
    MapaServicosComponent,
    AjudaContentComponent,
    ContatoContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    PortalModule,
  ],
  providers: [
    PrintService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
