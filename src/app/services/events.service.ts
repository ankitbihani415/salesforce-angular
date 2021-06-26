import { Injectable } from '@angular/core'
import { HttpWrapper } from './http-wrapper'

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  constructor(private http: HttpWrapper) {}

  private eventsURL = "/events"

  get() {
    return this.http.get(this.eventsURL)
  }

  getEvent(eventId) {
    return this.http.get(`${this.eventsURL}/${eventId}`)
  }

  create(eventRegistrationInformation) {
    return this.http.post(`${this.eventsURL}/register`, eventRegistrationInformation)
  }

}