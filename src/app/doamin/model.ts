export class Model {

  uuid: string | null = null;
  dataSetName: string=   '';
  persons: Person[] = []

}

export class Person {
  uuid: string | null = null;
  name: string =  '';
  age: number =  0;
  projects: Project[] = []
}

export class Project {
  uuid: string | null = null;
  projectName: string =  '';
  activities: Activity[] =[]
}

export class Activity {
  uuid: string | null = null;
  activityName: string = '';
  date: string = '';
  tasks: Task[] = []
}

export class Task {
  uuid: string | null = null;
  taskName: string = '';
  taskDuration: number | null = 0;
}
