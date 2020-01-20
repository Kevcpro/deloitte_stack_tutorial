import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title:string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    var date = new Date().toISOString().slice(0,10);
    const todo = {
      title: this.title,
      content: "a",
      created: date,
      due_date: date,
      completed: false,
      category: 7
    }

    this.addTodo.emit(todo);
  }

}