import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class HttpWrapper {
  API_BASE_URL = "https://salesforce-assessment-backend.herokuapp.com/api/v1"

  constructor(private http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(this.API_BASE_URL + url)
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(this.API_BASE_URL + url, body)
  }

  put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(this.API_BASE_URL + url, body)
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(this.API_BASE_URL + url)
  }

  patch<T>(url: string, body: string): Observable<T> {
    return this.http.patch<T>(this.API_BASE_URL + url, body)
  }
}