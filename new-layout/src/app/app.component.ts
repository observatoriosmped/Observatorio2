import { Component } from '@angular/core';
import { PrintService } from './portal/services/print.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Observatório Municipal da Pessoa com Deficiência';

  // alternatively also the host parameter in the @Component()` decorator can be used

  constructor(public printService: PrintService) {
  }

}
