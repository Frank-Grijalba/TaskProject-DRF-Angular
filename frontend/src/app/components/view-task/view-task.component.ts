import { Component } from '@angular/core';
import { TaskService } from 'src/app/task.service'; // Importacion del servicio

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent{
  tasks: any | undefined

  

  constructor(private taskService: TaskService){
  }

  ngOnInit():void {
    this.taskService.getAllTasks().subscribe(data=> { 
      this.tasks = data
      console.log(data)
    })
  }

 
  // filterTasksByStatus(status: string) {
  //   if (status === 'all') {
  //     return this.tasks;
  //   } else {
  //     return this.tasks.filter((task: any) => task.status_task === status);
  //   }
  // }

  // filterTasksByStatus(status: string) {
  //   this.filterProperty = status;
  // }
  

  deleteTask(id: number){
    if (confirm('¿Are you sure you want to delete this task?')){
      this.taskService.deleteTask(id).subscribe(data => {
        console.log(data)
        this.ngOnInit() // refrescar el listado de tareas despues de eliminar
      })
    }
  }
}