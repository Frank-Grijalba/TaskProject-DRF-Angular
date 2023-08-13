import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  task: any;
  data: any;
  form!: FormGroup;

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.taskService.getTask(id).subscribe(data => {
      this.task = data;
      console.log(data);
    });

    this.form = new FormGroup({
      id: new FormControl(''), // Campo oculto para capturar el ID
      title: new FormControl(''),
      description: new FormControl(''),
      task_status: new FormControl(''),
      task_update_date: new FormControl(''),
    });
  }

  submit() {
    
    this.data = this.form.value;
    this.task.title = this.data.title || this.task.title
    this.task.description = this.data.description || this.task.description;
    this.task.status_task = this.data.task_status || this.task.status_task;
    this.task.update_date_task = this.data.task_update_date || this.task.update_date_task;
   
    // console.log("ID PARA ACTUALIZAR", this.data.id);

    this.taskService.updateTask(this.task).subscribe(data => {
      console.log(data);
    });

    this.router.navigate(['/']);
  }
}