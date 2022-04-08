import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { IPainel } from '../models/painel.model';
import { PainelService } from './painel.service';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PainelResolverService implements Resolve<IPainel> {

  constructor(private painelService: PainelService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPainel> | Observable<never> {
    const painelId = route.paramMap.get('painelId');

    return this.painelService.getPainel(painelId).pipe(
      catchError((err) => {
        this.router.navigate(['']);
        return EMPTY;
      })
    );
  }
}
