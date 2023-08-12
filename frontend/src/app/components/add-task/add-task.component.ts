import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import  Task  from 'src/app/task.model'


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  data: any
  constructor(private taskService: TaskService, private router: Router){
  }

  form = new FormGroup ({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    task_status: new FormControl('', Validators.required)

  })

  addTask(){
    this.data = this.form.value
    
    this.taskService.createTask(this.data).subscribe(data=>{
      console.log(data)
    })

    this.router.navigate(['/'])
  }
  
}

