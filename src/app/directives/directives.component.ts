import { Component } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  viewMode: string

  courses = ['cours1', 'cours2', 'cours3']

  objects

  nilObject = {
    name : 'I\'m a nil object',
    testObj : null
  }

  onAdd() {
    this.objects.push({ id: 4, name: 'obj4'})
  }

  onRemove(object) {
    const index = this.objects.indexOf(object)
    this.objects.splice(index, 1)
  }

  loadObjects() {
    this.objects = [
      { id: 1, name: 'obj1 ' },
      { id: 2, name: 'obj2 ' },
      { id: 3, name: 'obj3 ' }
    ]
  }

  trackCourse(index, object) {
    console.log('lul')
    return object ? object.id : undefined
  }

}
