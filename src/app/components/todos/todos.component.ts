import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {

  }
  // subscribe is similar to .then in promises
  ngOnInit(): void {
    this.todoService.getTodos().subscribe( todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    // Remove from UI
    this.todos = this.todos.filter( t => t.id !== todo.id);
    // Remove from Server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo) {
    console.log("todo addtToDo");
    this.todoService.addTodo(todo).subscribe( todo => {
      console.log("successful posted and pushed");
      this.todos.push(todo);
    })
  }
}
