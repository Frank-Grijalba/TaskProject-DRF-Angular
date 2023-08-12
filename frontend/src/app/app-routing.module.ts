import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component'


const routes: Routes = [
  {path: '', redirectTo: '/tasks', pathMatch: 'full' },
  {path: 'tasks', component: ViewTaskComponent },
  {path: 'add', component: AddTaskComponent },
  {path: 'update/:id', component: UpdateTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }