import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class PrintService {
  isPrinting = false;

  constructor(private router: Router) { }

  printDocument(documentCollection: string, documentId: string) {
    this.isPrinting = true;
    this.router.navigate(['/',
      { outlets: {
        print: ['print', documentCollection, documentId]
      }}]);
  }

  onDataReady() {
    setTimeout(() => {
      window.print();
      this.isPrinting = false;
      this.router.navigate([{ outlets: { print: null }}]);
    });
  }
}

