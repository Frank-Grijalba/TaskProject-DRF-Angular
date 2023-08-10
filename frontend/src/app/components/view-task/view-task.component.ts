import { Component } from '@angular/core';
import { TaskService } from 'src/app/task.service'; // Importacion del servicio

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent {
  tasks: any | undefined
  
  constructor(private taskService: TaskService){
  }

  ngOnInit():void {
    this.taskService.getAllTasks().subscribe(data=> { // Listar las tareas
      this.tasks = data
      console.log(data)
    })
  }

  deleteTask(id: number){
    this.taskService.deleteTask(id).subscribe(data => {
      console.log(data)
      this.ngOnInit() // refrescar el listado de tareas despues de eliminar
    })
  }
}