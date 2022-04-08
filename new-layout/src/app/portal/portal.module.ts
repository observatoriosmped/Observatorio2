import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal/portal.component';
import { PainelComponent } from './painel/painel.component';
import { GraficoComponent } from './shared/grafico/grafico.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PortalRoutingModule } from './portal-routing.module';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { PrintPainelComponent } from './print-painel/print-painel.component';
import { PrintGraficoComponent } from './print-grafico/print-grafico.component';
import { MapaComponent } from './shared/mapa/mapa.component';
import { PrintMapaComponent } from './print-mapa/print-mapa.component';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ErrorHandlerPortal } from './errorHandlerPortal'
import { AcessibilidadeDialogComponent } from './acessibilidade-dialog/acessibilidade-dialog.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { A11yModule } from '@angular/cdk/a11y';


@NgModule({
  declarations: [
    PortalComponent,
    PainelComponent,
    GraficoComponent,
    PrintLayoutComponent,
    PrintPainelComponent,
    PrintGraficoComponent,
    MapaComponent,
    PrintMapaComponent,
    AcessibilidadeDialogComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    FontAwesomeModule,
    MatGridListModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatProgressBarModule,
    SweetAlert2Module,
    PortalRoutingModule,
    // MatSnackBarModule,
    MatExpansionModule,
    A11yModule
  ],
  providers: [
    // {provide: ErrorHandler, useClass: ErrorHandlerPortal}
  ]
})
export class PortalModule { }
