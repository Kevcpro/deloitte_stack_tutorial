import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }) 
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todosUrl:string = 'http://localhost:8000/api/todolist/'
  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo []>{
    return this.http.get<Todo []>(this.todosUrl);
  }

  toggleCompleted(todo: Todo):Observable<any> { 
    const url = `${this.todosUrl}${todo.id}/`;
    return this.http.put(url, todo, httpOptions);
  }

  deleteTodo(todo: Todo):Observable<Todo>{
    const url = `${this.todosUrl}${todo.id}/`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  addTodo(todo: Todo):Observable<Todo>{
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }
}
