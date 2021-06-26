import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material'
import { Router } from '@angular/router'
import { Event } from '../../models/event.model'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
	displayedColumns: string[] = ['title', 'starts_date', 'ends_date'];
	dataSource

	constructor(
		private eventsService: EventsService,
		private router: Router
		) { }

	ngOnInit() {
		this.eventsService.get().subscribe((data: any[])=>{  
	    data.map((row, ii) => {
	      row.StartDate__c = new Date(row.StartDate__c)
	    })
			data = data.sort((a, b) => b.StartDate__c - a.StartDate__c)
			this.dataSource = new MatTableDataSource(data)
		})  
	}

  showEventDetails(EventID: string) {
    return this.router.navigate(["/event-details", EventID])
  }

}
