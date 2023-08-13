import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Task from './task.model';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private baseUrl = 'http://127.0.0.1:8000'; 

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/tasks`);
  }

  getTask(id: number): Observable<Task> {
    const url = `${this.baseUrl}/tasks/${id}/`
    console.log("Get Task: " + url)
    return this.http.get<Task>(url);
  }

  createTask(task: Task): Observable<Task> {
    console.log("Pagina create task " + `${this.baseUrl}/tasks/`)
    return this.http.post<Task>(`${this.baseUrl}/tasks/`, task);
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${this.baseUrl}/tasks/${task.id}/`;
    console.log("Pagina Update " + url );
    return this.http.put<Task>(url, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/tasks/${id}`);
  }
}