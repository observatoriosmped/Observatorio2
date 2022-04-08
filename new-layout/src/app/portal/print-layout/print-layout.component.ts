import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PrintService } from '../services/print.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-print-layout',
  templateUrl: './print-layout.component.html',
  styleUrls: ['./print-layout.component.scss']
})
export class PrintLayoutComponent implements OnInit, AfterViewInit {

  constructor(private printService: PrintService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    timer(3000).subscribe(() => this.printService.onDataReady());
  }

}
