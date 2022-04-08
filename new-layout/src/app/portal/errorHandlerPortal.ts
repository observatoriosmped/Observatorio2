import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorHandlerPortal implements ErrorHandler {
  constructor(private snackbar: MatSnackBar) {}
    handleError(error) {
      // this.snackbar.open(error,'Fechar');
    }
  }