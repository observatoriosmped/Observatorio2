import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PainelComponent } from './painel/painel.component';
import { PainelResolverService } from './services/painel-resolver.service';
import { PortalComponent } from './portal/portal.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { PrintPainelComponent } from './print-painel/print-painel.component';


const routes: Routes = [
  { path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      {
        path: 'paineis/:painelId',
        component: PrintPainelComponent,
        resolve: {
          painel: PainelResolverService
        }
      }
    ]
  },
  {
    path: 'paineis',
    children: [
      {
        path: '',
        component: PortalComponent,
      },
      {
        path: ':painelId',
        component: PainelComponent,
        resolve: {
          painel: PainelResolverService
        }
      },
    ]
  },
  {
    path: '',
    redirectTo: 'paineis',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'paineis',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
