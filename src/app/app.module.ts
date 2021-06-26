import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http'
import { EventsComponent } from './components/events/events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatSnackBarModule,
  MatProgressSpinnerModule } from '@angular/material';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventRegistrationDialogComponent } from './components/event-registration-dialog/event-registration-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ErrorsHandler } from './services/error-handler.service'
import { SnackBarService } from './services/snack-bar.service';
import { StripHtmlPipe } from './pipes/stripe-html.pipe'

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventDetailsComponent,
    EventRegistrationDialogComponent,
    StripHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule,
    NgbModule
  ],
  entryComponents: [
    EventRegistrationDialogComponent
  ],
  providers: [
    SnackBarService,
    ErrorsHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
