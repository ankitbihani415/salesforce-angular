import { MatSnackBar } from '@angular/material'
import { Injectable } from '@angular/core'

@Injectable()
export class SnackBarService {
  constructor(
    private snackBar: MatSnackBar
  ) {}

  public open(msg: string): void {
    this.snackBar.open(msg, 'close', {
      duration: 3000
    })
  }
}