import { Component } from '@angular/core';
import Task from 'src/app/task.model';
import { TaskService } from 'src/app/task.service'; // Importacion del servicio

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent{
  tasks: Task[] = [];
  page: number = 0;
  search: string = '';

  

  constructor(private taskService: TaskService){
  }

  ngOnInit():void {
    this.taskService.getAllTasks().subscribe(data=> { 
      this.tasks = Array.from(data);
      console.log(data)
    })
  }

   deleteTask(id: number){
    if (confirm('¿Are you sure you want to delete this task?')){
      this.taskService.deleteTask(id).subscribe(data => {
        console.log(data)
        this.ngOnInit() // refrescar el listado de tareas despues de eliminar
      })
    }
  }

  nextPage(){
    this.page +=6;
  }

  previousPage(){
    if(this.page > 0)
      this.page -=6;
  }

  onSearchStatus(search: string){
    this.page = 0;
    this.search = (search.toUpperCase());
  }
}