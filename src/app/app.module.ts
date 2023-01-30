import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ActivityComponent } from './activity/activity.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { PersonComponent } from './person/person.component';
import { ProjectsComponent } from './projects/projects.component';
import { InvisibleFormControlComponent } from './invisible-form-control/invisible-form-control.component';
import { CrossValidatorDirective } from './validators/cross-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    TasksComponent,
    TaskComponent,
    PersonComponent,
    ProjectsComponent,
    InvisibleFormControlComponent,
    CrossValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
