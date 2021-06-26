import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { EventsService } from '../../services/events.service';
import { SnackBarService } from '../../services/snack-bar.service'
import { ErrorsHandler } from '../../services/error-handler.service'

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration-dialog.component.html',
  styleUrls: ['./event-registration-dialog.component.scss']
})

export class EventRegistrationDialogComponent implements OnInit {
  registrationForm: FormGroup

  constructor(
    private eventsService: EventsService,
		private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private errorsHandlerService: ErrorsHandler,
    private dialogRef: MatDialogRef<EventRegistrationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  	) { }

  ngOnInit() {
  	this.initRegistrationForm()
  }

  initRegistrationForm() {
    const phoneNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"
    this.registrationForm = this.formBuilder.group({
      firstName__c: ['', Validators.required],
      lastName__c: ['', Validators.required],
      email__c: ['', [Validators.required,Validators.email]],
      phone__c: ['', [Validators.required, Validators.pattern(phoneNumberPattern)]],
      company__c: ['', Validators.required],
      eventId__c: [this.data.eventId]
    })  	
  }

  registerEvent() {
    return this.eventsService.create(this.registrationForm.value)
      .subscribe(
        data => {
          this.snackBarService.open("Registration successfull")
          return this.onClose()
        },
        error => this.errorsHandlerService.handleError("Registration failed")
      )
  }

  onClose(): void {
    this.dialogRef.close()
  }
}
