import { Injectable } from '@angular/core'
import { HttpWrapper } from './http-wrapper'

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpWrapper) {}

  private loginURL = "/login"

  createSession(loginInformation) {
    return this.http.post(this.loginURL, loginInformation)
  }

}