import {Component, OnInit} from '@angular/core';
import {Model} from "./doamin/model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  formModel: Model = new Model();

  tasks = [];

  ngOnInit(): void {
    this.clearData()
    this.patchData()
    this.clearData()
    this.patchData()
    this.clearData()
    this.patchData()
    this.clearData()
    this.patchData()
    this.clearData()
    this.patchData()
    this.clearData()
    this.patchData()
    this.clearData()
    this.patchData()
    this.clearData()
    this.patchData()
    this.clearData()
  }


  clearData() {
    this.formModel = new Model();
  }


  patchData() {
    this.formModel = {
      uuid:'f1',
      dataSetName: 'set_new',
      persons: [
        {
          uuid:'pers1',
          name: 'data_1',
          age: 23,
          projects: [
            {
              uuid:'p1',
              projectName: 'p1',
              activities: [
                {
                  uuid:'a1',
                  activityName: 'Activitate',
                  date: 'astazi',
                  tasks: [
                    {
                      uuid:'1',
                      taskName: 't1',
                      taskDuration: 1
                    }, {
                      uuid:'2',
                      taskName: 't2',
                      taskDuration: 4
                    }, {
                      uuid:'3',
                      taskName: 'bbb',
                      taskDuration: null
                    }
                  ]
                },
                {
                  uuid:'a2',
                  activityName: 'Activitate 2',
                  date: 'maine',
                  tasks: [
                    {
                      uuid:'4',
                      taskName: 't1`',
                      taskDuration: 1
                    }, {
                      uuid:'5',
                      taskName: 't2`',
                      taskDuration: 4
                    }, {
                      uuid:'6',
                      taskName: 't3`',
                      taskDuration: 5
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }

  }
}

