import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { EventsComponent } from './components/events/events.component'
import { EventDetailsComponent } from './components/event-details/event-details.component'

const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full'},
  { path: 'events', component: EventsComponent },
  { path: 'event-details/:id', component: EventDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
