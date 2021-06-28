import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { EventsService } from '../../services/events.service';
import { Event } from '../../models/event.model'
import { EventRegistrationDialogComponent } from '../../components/event-registration-dialog/event-registration-dialog.component'
import { MatDialog } from '@angular/material/dialog'
import { ErrorsHandler } from '../../services/error-handler.service'

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})

export class EventDetailsComponent implements OnInit {
  eventID: string = this.route.snapshot.params.id.toString()
  event: Event

  constructor(
		private eventsService: EventsService,
		private route: ActivatedRoute,
		private dialog: MatDialog,
    private errorsHandlerService: ErrorsHandler
    ) {}

  ngOnInit() {
  	this.getEventDetails()
  }

  getEventDetails() {
    return this.eventsService.getEvent(this.eventID)
      .subscribe(
        (event: Event) => {
          this.event = event
        },
        error => this.errorsHandlerService.handleError("Error occured")
      )  	
  }

  public openEventRegistrationModal(eventId) {
    this.dialog.open(EventRegistrationDialogComponent, {
      width: '400px',
      data: {eventId: eventId}
    }).afterClosed().subscribe(() => {
     
    })
  }

}
