import { Injectable } from '@angular/core'
import { SnackBarService } from '../services/snack-bar.service'

@Injectable()
export class ErrorsHandler {
  constructor(private snackBar: SnackBarService) { }

  public handleError(msg: string): void {
    this.snackBar.open(msg)
  }
}